import styled, { css } from "styled-components";

export const LoadingDiv = styled.div`
  max-width: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  margin: 10px;
`;

export const Header = styled.h1`
  color: teal;
  text-align: center;
`;

export const Content = styled.p`
  color: teal;
  text-align: center;

  ${({ errorContent }) =>
    errorContent &&
    css`
      color: red;
    `}
`;
