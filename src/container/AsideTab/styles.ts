import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 32px 12px;
  background-color: ${colors.mainColor};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 280px;
  }
`
