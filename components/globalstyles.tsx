import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: #767675;
    color: #f0f0f0;
    padding: 0;
    margin: 0;
    font-family: Poppins;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  h2,p{
    margin: 0;
  }
`
export default GlobalStyle
