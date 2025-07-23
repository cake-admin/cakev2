import { createGlobalStyle } from 'styled-components';

export const fontStack = '"Segoe UI", "Lato", "Noto Sans", Arial, sans-serif';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontStack};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles; 