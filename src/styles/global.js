import { createGlobalStyle } from 'styled-components';

import Colors from '../utils/constants/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${Colors.Background};
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
