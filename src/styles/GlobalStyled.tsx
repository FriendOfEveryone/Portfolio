import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }

    body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      color: ${theme.colors.font};
      background-color: ${theme.colors.primiryBg};
      line-height: 1.2;
}

section {
  padding: 100px 0;
}

section:nth-of-type(odd) {
  background-color: ${theme.colors.primiryBg};
}

section:nth-of-type(even) {
  background-color: ${theme.colors.secondaryBg};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  color: ${theme.colors.font};
  text-decoration: none;
  cursor: pointer;
}

ul {
    list-style-type: none;}

button {
    background-color: unset;
    border:  none;
    color: ${theme.colors.font};
    text-transform: uppercase;
    cursor: pointer;
}

h3 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
}

p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
}

`;
