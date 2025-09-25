import { createGlobalStyle } from 'styled-components';

export const fontStack = '"Noto Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans CJK", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

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
  
  h1 {
    font-size: 2rem;
  }
`;

export default GlobalStyles; 