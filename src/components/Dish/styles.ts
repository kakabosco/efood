import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  border-radius: 12px;
  background-color: ${colors.mainColor};
  color: ${colors.secondaryBgColor};

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
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

export const MoreButton = styled.button`
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.active {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s;
  }

  .container {
    z-index: 1;

    header {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 16px;
      margin-right: 8px;

      img {
        width: 16px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 32px;
  color: ${colors.white};
  border-radius: 12px;
  background-color: ${colors.mainColor};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 32px;
    border-radius: 8px;
  }

  ${Title} {
    font-size: 18px;
  }

  ${Description} {
    margin: 16px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    height: 80vh;
    overflow-y: scroll;

    img {
      width: 100%;
      height: auto;
    }
  }
`

export const Portion = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
`

export const AddCart = styled(MoreButton)`
  width: auto;
  padding: 4px 8px;
`
