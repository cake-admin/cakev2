import { createGlobalStyle } from 'styled-components';

export const fontStack = '"Segoe UI", "Lato", "Noto Sans", Arial, sans-serif';

// Define the background.canvas color token
export const tokens = {
  background: {
    canvas: '#F8FAFC'
  }
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontStack};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${tokens.background.canvas};
  }
`;

export default GlobalStyles; 