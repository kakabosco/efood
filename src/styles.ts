import styled, { createGlobalStyle } from 'styled-components'

type InputGroupProps = {
  maxWidth?: string
}

export const colors = {
  white: '#FFFFFF',
  mainBgColor: '#FFF8F2',
  secondaryBgColor: '#FFEBD9',
  mainColor: '#E66767',
  secondaryColor: '#422002',
  gray: '#4b4b4b',
  error: '#e44747'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

const GlobalCSS = createGlobalStyle`
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

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`

export const Tab = styled.div`
  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.secondaryBgColor};
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.secondaryBgColor};
  }
`

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 32px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.secondaryBgColor};
  }

  input {
    width: 100%;
    height: 32px;
    margin-block: 8px;
    padding: 0 8px;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.gray};
    border: 1px solid ${colors.secondaryBgColor};
    background-color: ${colors.secondaryBgColor};

    &.error {
      border: 2px solid ${colors.error};
    }
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 4px 0;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.mainColor};
  background-color: ${colors.secondaryBgColor};
  cursor: pointer;

  &:last-child {
    margin-top: 8px;
  }
`

export default GlobalCSS
