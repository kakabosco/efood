import styled from 'styled-components'
import header from '../../assets/images/header.png'
import { Link } from 'react-router-dom'
import { HeaderProps } from '.'
import { breakpoints, colors } from '../../styles'

export const HeaderDiv = styled.header<HeaderProps>`
  height: ${(props) => props.height};
  background-image: url(${header});

  @media (max-width: ${breakpoints.tablet}) {
    height: 154px;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 64px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0;
    justify-content: center;
  }

  img {
    margin: 0 auto;
    padding: 0 32px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0;
      padding-right: 24px;
    }
  }
`

export const Title = styled.h2`
  width: 640px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const ReturnLink = styled(Link)`
  color: ${colors.mainColor};
  text-decoration: none;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Cart = styled.a`
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: auto;
    font-size: 14px;
    text-align: right;
  }
`
