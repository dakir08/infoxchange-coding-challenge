import styled from "@emotion/styled";

export const StyledAuthorTableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledAuthorTable = styled.table`
  width: 100%;
  border: 1px solid #dee2e6;

  tr {
    :nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    :hover {
      color: #212529;
      background-color: rgba(0, 0, 0, 0.07);
    }
  }

  th {
    padding: 1rem;
    background-color: white;
  }

  td {
    padding: 1rem;
  }
`;

export const StyledTableHead = styled.thead`
  border-bottom: 0.2rem solid #ececec;
`;
