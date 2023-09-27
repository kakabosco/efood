import styled from 'styled-components'
import header from '../../assets/images/header.png'

export const HeaderDiv = styled.header`
  height: 350px;
  background-image: url(${header});
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0;
`

export const Title = styled.h2`
  width: 640px;
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;
`
