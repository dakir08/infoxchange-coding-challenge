import React from "react";
import {
  StyledBook,
  StyledBookImage,
  StyledbookTitle,
  StyledBookTitleWrapper,
} from "./Book.style";

export interface BookProps {
  coverImage?: string;
  title: string;
}

export const Book: React.FunctionComponent<BookProps> = ({
  coverImage,
  title,
}) => {
  return (
    <StyledBook>
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
