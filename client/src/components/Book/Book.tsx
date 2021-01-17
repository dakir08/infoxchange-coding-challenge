import React from "react";
import { useBook } from "./Book.logic";
import {
  StyledBook,
  StyledBookImage,
  StyledbookTitle,
  StyledBookTitleWrapper,
} from "./Book.style";
import BookCoverImage from "../../../public/book_placeholder.png";

export interface BookProps {
  coverImage?: string;
  title: string;
  bookId: number;
}

export const Book: React.FunctionComponent<BookProps> = ({
  coverImage,
  title,
  bookId,
}) => {
  const {
    operators: { handleBookClicked },
  } = useBook(bookId);

  return (
    <StyledBook onClick={handleBookClicked}>
      <StyledBookImage src={coverImage ?? BookCoverImage} alt="book cover" />
      <StyledBookTitleWrapper>
        <StyledbookTitle>{title}</StyledbookTitle>
      </StyledBookTitleWrapper>
    </StyledBook>
  );
};
