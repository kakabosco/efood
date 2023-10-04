import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
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
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondaryBgColor};
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 12px;
  background-color: ${colors.secondaryBgColor};
  color: ${colors.mainColor};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-image: url(${trash});
    background-color: transparent;
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 4px 0;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.mainColor};
  background-color: ${colors.secondaryBgColor};
`
