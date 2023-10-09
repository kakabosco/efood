import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { RootReducer } from '../../store'
import { open, setTab } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/carrinho.png'

import * as S from './styles'

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
    dispatch(setTab('cart'))
    dispatch(open())
  }

  const isHomePage = location.pathname === '/'

  const height = isHomePage ? '350px' : '186px'
  const showTitle = isHomePage
  const showReturnLink = !isHomePage
  const showCart = !isHomePage

  return (
    <S.HeaderDiv height={height}>
      <div className="container">
        <S.LogoDiv>
          {showReturnLink && (
            <S.ReturnLink to="/" className="absolute-left">
              &lsaquo; Voltar para restaurantes
            </S.ReturnLink>
          )}
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          {isHomePage && (
            <S.CartContainer className="absolute-right" onClick={openCart}>
              <S.Cart>{items.length}</S.Cart>
              <img src={cart} alt="Carrinho" />
            </S.CartContainer>
          )}
          {showCart && (
            <S.CartContainer onClick={openCart} className="absolute-right">
              <S.Cart>
                {items.length} <span> - Produto(s) no carrinho</span>
              </S.Cart>
              <img src={cart} alt="Carrinho" />
            </S.CartContainer>
          )}
        </S.LogoDiv>
      </div>
      {showTitle && (
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      )}
    </S.HeaderDiv>
  )
}

export default Header
