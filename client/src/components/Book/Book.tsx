import React from "react";
import { useHistory } from "react-router";
import { useBook } from "./Book.logic";
import {
  StyledBook,
  StyledBookImage,
  StyledbookTitle,
  StyledBookTitleWrapper,
} from "./Book.style";

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
    operators: { bookClicked },
  } = useBook(bookId);

  return (
    <StyledBook onClick={bookClicked}>
      <StyledBookImage
        src={
          coverImage ??
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"
        }
        alt="book cover"
      />
      <StyledBookTitleWrapper>
        <StyledbookTitle>{title}</StyledbookTitle>
      </StyledBookTitleWrapper>
    </StyledBook>
  );
};
