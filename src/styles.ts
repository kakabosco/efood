import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFFFFF',
  mainBgColor: '#FFF8F2',
  secondaryBgColor: '#FFEBD9',
  mainColor: '#E66767',
  secondaryColor: '#422002'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
  }

  body {
    background: ${colors.mainBgColor};
    color: ${colors.mainColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`