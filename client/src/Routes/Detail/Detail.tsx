import { css } from "@emotion/react";
import React from "react";
import { Portal } from "../../components/Portal/Portal";
import { StyledButton } from "../../shared/Button";
import { StyledOption, StyledSelect } from "../../shared/Select";
import { StyledTextField } from "../../shared/TextField";
import { useDetail } from "./Detail.logic";
import {
  StyledDetail,
  StyledDetailCRUDButton,
  StyledDetailImage,
  StyledDetailRightContainer,
} from "./Detail.style";

export interface DetailRouteProps {}

export const DetailRoute: React.FunctionComponent<DetailRouteProps> = () => {
  const {
    models: {
      authors,
      book,
      editMode,
      openPortal,
      history,
      makingRequest,
      deletedBook,
    },
    operators: {
      closePortal,
      deleteBook,
      handleSubmit,
      setOpenPortal,
      setEditMode,
      changeSelectValue,
      handleTextChanged,
    },
  } = useDetail();

  const renderBookDetailWithEditableSelect = () => {
    const renderAuthorName = () =>
      !author?.firstName && !author?.lastName
        ? "No Author"
        : `${author?.firstName} ${author?.lastName}`;

    return editMode ? (
      <StyledSelect
        onChange={changeSelectValue}
        required
        defaultValue={
          book?.author?.id && author?.firstName ? book.author.id : "default"
        }
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
      renderAuthorName()
    );
  };

  const renderDeleteBook = () => (
    <>
      <p>
        Are you sure to delete this book?
        <strong> This task can't be reverted</strong>
      </p>
      <StyledButton
        color="error"
        css={css`
          margin-bottom: 0.5rem;
        `}
        onClick={deleteBook}
      >
        Yes
      </StyledButton>
      <StyledButton onClick={closePortal}>No</StyledButton>
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

  const renderButtonWhenEditModeEnabled = () =>
    editMode ? (
      <StyledDetailCRUDButton onClick={() => setEditMode(false)}>
        Finish
      </StyledDetailCRUDButton>
    ) : (
      <StyledDetailCRUDButton onMouseDown={() => setEditMode(true)}>
        Modify Book
      </StyledDetailCRUDButton>
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
                  name="name"
                  value={name}
                  onChange={handleTextChanged}
                />
              ) : (
                name
              )}
            </h3>
            <p>
              ISBN:
              {editMode ? (
                <StyledTextField
                  name="isbn"
                  value={isbn}
                  onChange={handleTextChanged}
                />
              ) : (
                isbn
              )}
            </p>
            <h4>Author:</h4>
            <p>{renderBookDetailWithEditableSelect()}</p>
            {renderButtonWhenEditModeEnabled()}
            <StyledDetailCRUDButton
              color="error"
              css={css`
                margin-top: 0.5rem;
              `}
              type="button"
              onClick={() => setOpenPortal(true)}
            >
              Delete Book
            </StyledDetailCRUDButton>
          </StyledDetailRightContainer>
        </StyledDetail>
      </form>
      {openPortal && (
        <Portal onClose={closePortal}>
          {deletedBook ? renderDeleteBookSuccess() : renderDeleteBook()}
        </Portal>
      )}
    </>
  );
};
