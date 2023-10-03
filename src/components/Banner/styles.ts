import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${colors.white};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    display: flex;
    padding-top: 210px;
    position: relative;
    z-index: 1;
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
