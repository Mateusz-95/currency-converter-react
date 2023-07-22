import background from "./share.png";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  font-family: "Lato", sans-serif;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 767px) {
  body {
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    background-position: top;
  }
}
`;
