import { createGlobalStyle } from 'styled-components'
import { colors } from './sharedstyles'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${colors.background};
    color: ${colors.fontColor};
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
