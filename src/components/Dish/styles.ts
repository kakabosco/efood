import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  border-radius: 12px;
  background-color: ${colors.mainColor};
  color: ${colors.secondaryBgColor};

  > img {
    width: 100%;
    border-radius: 8px;
  }
`

export const Title = styled.h2`
  margin: 8px 0;
  font-size: 16px;
`

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`

export const AddCart = styled.button`
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  color: ${colors.mainColor};
  background-color: ${colors.secondaryBgColor};
  cursor: pointer;
`
