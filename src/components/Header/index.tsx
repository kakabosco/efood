import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { HeaderDiv, Title, LogoDiv, ReturnLink, Cart } from './styles'
import logo from '../../assets/images/logo.png'

export type HeaderProps = {
  height?: string
  showTitle?: boolean
  showReturnLink?: boolean
  showCart?: boolean
}

const Header = () => {
  const location = useLocation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  const isHomePage = location.pathname === '/'

  const height = isHomePage ? '350px' : '186px'
  const showTitle = isHomePage
  const showReturnLink = !isHomePage
  const showCart = !isHomePage

  return (
    <HeaderDiv height={height}>
      <div className="container">
        <LogoDiv>
          {showReturnLink && (
            <ReturnLink to="/">&lsaquo; Voltar para restaurantes</ReturnLink>
          )}
          <img src={logo} alt="Logo" />
          {showCart && (
            <Cart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </Cart>
          )}
        </LogoDiv>
      </div>
      {showTitle && (
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      )}
    </HeaderDiv>
  )
}

export default Header
