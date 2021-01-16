import styled from "@emotion/styled";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAppContainer = styled.div`
  margin: 2rem auto;
  width: 1024px;

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 330px;
  }
`;
