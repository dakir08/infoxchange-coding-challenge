import styled from "@emotion/styled";
import BookCoverImage from "../../../public/book_placeholder.png";

export const StyledDetail = styled.div`
  display: flex;
  min-height: 400px;
  margin-top: 1rem;
`;

export const StyledDetailImage = styled.div`
  width: 30%;

  background-image: url(${BookCoverImage});
  background-color: #111111;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 2.5rem;
`;

export const StyledDetailRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
