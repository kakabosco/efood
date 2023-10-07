import { useDispatch, useSelector } from 'react-redux'

import Cart from '../../components/Cart'
import DeliveryInfo from '../../components/DeliveryInfo'
import PaymentInfo from '../../components/PaymentInfo'

import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const AsideTab = () => {
  const { isOpen, currentTab } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeTab = () => {
    dispatch(close())
  }

  return (
    <S.AsideContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeTab} />
      <S.Sidebar>
        {currentTab === 'cart' && <Cart />}
        {currentTab === 'delivery' && <DeliveryInfo />}
        {currentTab === 'payment' && <PaymentInfo />}
      </S.Sidebar>
    </S.AsideContainer>
  )
}

export default AsideTab
