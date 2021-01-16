import { css } from "@emotion/react";
import React from "react";
import { useHistory, useParams } from "react-router";
import { Portal } from "../../components/Portal/Portal";
import { Author } from "../../models/author";
import { Book } from "../../models/book";
import { getAllAuthor } from "../../services/authorServices";
import {
  deleteBookById,
  getBookById,
  modifyBookById,
} from "../../services/bookServices";
import { StyledButton } from "../../shared/Button";
import { StyledOption, StyledSelect } from "../../shared/Select";
import { StyledTextField } from "../../shared/TextField";
import { useRequest } from "../../utils/useRequest";
import {
  StyledDetail,
  StyledDetailImage,
  StyledDetailRightContainer,
} from "./Detail.style";
import { toast } from "react-hot-toast";

export interface DetailRouteProps {}

export const DetailRoute: React.FunctionComponent<DetailRouteProps> = () => {
  const params = useParams<{ id: string }>();
  const history = useHistory();
  const {
    data: book,
    makingRequest,
    makeRequest,
    setData: setBook,
  } = useRequest<Book>();
  const [editMode, setEditMode] = React.useState(false);
  const [authors, setAuthors] = React.useState<Author[]>();
  const [openPortal, setOpenPortal] = React.useState(false);
  const [deletedBook, setDeletedBook] = React.useState(false);

  React.useEffect(() => {
    makeRequest({
      request: () => getBookById(Number(params.id)),
      onSuccess: setBook,
      onError: () => {},
    });

    makeRequest({
      request: getAllAuthor,
      onSuccess: setAuthors,
      onError: () => {},
    });
  }, []);

  const handleDeleteBook = () => {
    if (!book) return;
    makeRequest({
      request: () => deleteBookById(book.id!),
      onSuccess: () => setDeletedBook(true),
      onError: () => toast.error("delete book error :(, please try again"),,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!book) return;

    makeRequest({
      request: () => modifyBookById(book.id!, book),
      onError: () => toast.error("modify book error :(, please try again"),
      onSuccess: () => toast.success("modify book success"),
    });
  };

  const handleClosePortal = () => setOpenPortal(false);

  const renderBookDetailWithEditableSelect = () => {
    const handleChangeSelectValue = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const authorId = e.currentTarget.value;
      const author = authors?.find((author) => author.id === Number(authorId));

      setBook({ ...book, author });
    };

    return editMode ? (
      <StyledSelect
        onChange={handleChangeSelectValue}
        required
        defaultValue={book?.author?.id}
      >
        <StyledOption disabled value="default">
          Select Author
        </StyledOption>
        {authors?.map((author) => (
          <StyledOption
            key={author.id}
            value={author.id}
          >{`${author.firstName} ${author.lastName}`}</StyledOption>
        ))}
      </StyledSelect>
    ) : (
      `${author?.firstName} ${author?.lastName}`
    );
  };

  const renderDeleteBook = () => (
    <>
      {" "}
      <p>
        Are you sure to delete this book?{" "}
        <strong>This task can't be reverted</strong>
      </p>
      <StyledButton
        color="error"
        css={css`
          margin-bottom: 0.5rem;
        `}
        onClick={handleDeleteBook}
      >
        Yes
      </StyledButton>
      <StyledButton onClick={handleClosePortal}>No</StyledButton>
    </>
  );

  const renderDeleteBookSuccess = () => (
    <>
      <p>Delete success!</p>
      <StyledButton onClick={() => history.push("/")}>
        Return to main page
      </StyledButton>
    </>
  );

  if (makingRequest || !book || !authors) return <div>loading...</div>;

  const { author, isbn, name } = book;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Book Detail</h2>
        <StyledDetail>
          <StyledDetailImage />
          <StyledDetailRightContainer>
            <h3>
              {editMode ? (
                <StyledTextField
                  value={name}
                  onChange={(e) =>
                    setBook({ ...book, name: e.currentTarget.value })
                  }
                />
              ) : (
                name
              )}
            </h3>
            <p>
              ISBN:{" "}
              {editMode ? (
                <StyledTextField
                  value={isbn}
                  onChange={(e) =>
                    setBook({ ...book, isbn: e.currentTarget.value })
                  }
                />
              ) : (
                isbn
              )}
            </p>
            <h4>Author:</h4>
            <p>{renderBookDetailWithEditableSelect()}</p>
            {editMode ? (
              <StyledButton onClick={() => setEditMode(false)}>
                Finish
              </StyledButton>
            ) : (
              <StyledButton onMouseDown={() => setEditMode(true)}>
                Modify Book
              </StyledButton>
            )}
            <StyledButton
              color="error"
              css={css`
                margin-top: 0.5rem;
              `}
              type="button"
              onClick={() => setOpenPortal(true)}
            >
              Delete Book
            </StyledButton>
          </StyledDetailRightContainer>
        </StyledDetail>
      </form>
      {openPortal && (
        <Portal onClose={handleClosePortal}>
          {deletedBook ? renderDeleteBookSuccess() : renderDeleteBook()}
        </Portal>
      )}
    </>
  );
};
