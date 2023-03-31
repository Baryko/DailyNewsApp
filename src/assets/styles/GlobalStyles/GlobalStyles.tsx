import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Nexa', sans-serif;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
