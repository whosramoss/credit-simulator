import { createGlobalStyle } from "styled-components";

export const StyledComponentsGlobal = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
