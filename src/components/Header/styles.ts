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
  justify-content: center;
  align-items: center;
  padding: 64px 0;
  position: relative;

  .absolute-right {
    position: absolute;
    right: 0;
  }

  .absolute-left {
    position: absolute;
    left: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0;
    justify-content: space-between;
  }

  Link img {
    margin: 0 auto;

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

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Cart = styled.a`
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: auto;
    font-size: 14px;
    text-align: right;
  }
`
