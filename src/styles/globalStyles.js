import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  }

  body {
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  img {
    /* Logo */
    position: relative;
    width: 306.08px;
    height: 38.84px;
  }

  div {
    /* Header */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 1440px;
    height: 420px;
    min-height: 140px;
    max-height: 420px;
    /* slate-100 */
    background: #F1F5F9;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

export default GlobalStyle;