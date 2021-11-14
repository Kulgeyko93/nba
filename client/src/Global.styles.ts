import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Open-Sans, Helvetica, sans-serif;
    border: 0;
    font-family: CormorantGaramond-Regular;
  }
`;

export default GlobalStyle;