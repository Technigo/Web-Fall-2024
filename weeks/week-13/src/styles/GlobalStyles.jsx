import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.primary};
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  body {
    margin: 0;
  }
`
