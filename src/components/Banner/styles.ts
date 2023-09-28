import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${colors.white};

  .container {
    display: flex;
    padding-top: 210px;
    position: relative;
  }
`

export const Info = styled.h3`
  position: absolute;
  top: 24px;
  font-size: 32px;
  font-weight: 100;
`

export const Title = styled.h2`
  font-size: 32px;
`
