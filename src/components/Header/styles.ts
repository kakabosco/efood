import styled from 'styled-components'
import header from '../../assets/images/header.png'
import { Link } from 'react-router-dom'
import { HeaderProps } from '.'
import { colors } from '../../styles'

export const HeaderDiv = styled.header<HeaderProps>`
  height: ${(props) => props.height};
  background-image: url(${header});
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 64px 0;

  img {
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  width: 640px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;
`

export const ReturnLink = styled(Link)`
  color: ${colors.mainColor};
  text-decoration: none;
  font-weight: bold;
`

export const Cart = styled.a`
  font-weight: bold;
  cursor: pointer;
`
