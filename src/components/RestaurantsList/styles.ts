import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 60px 0;
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
