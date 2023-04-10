import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #f5f5f6;
  

  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Nexa', sans-serif;
  }
  
  body {
 
    margin: 0;
    padding: 0;
  }
`;
