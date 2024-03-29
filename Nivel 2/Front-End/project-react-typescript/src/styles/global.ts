import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github.svg'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    --webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #root {
    max-width : 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  button {
    cursor: pointer;
  }
`;