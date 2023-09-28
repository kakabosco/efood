import { useLocation } from 'react-router-dom'
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
  const isHomePage = location.pathname === '/'

  const height = isHomePage ? '350px' : '186px'
  const showTitle = isHomePage
  const showReturnLink = !isHomePage
  const showCart = !isHomePage

  return (
    <HeaderDiv height={height}>
      <LogoDiv>
        {showReturnLink && (
          <ReturnLink to="/">&lsaquo; Voltar para restaurantes</ReturnLink>
        )}
        <img src={logo} alt="Logo" />
        {showCart && <Cart>0 produto(s) no carrinho</Cart>}
      </LogoDiv>
      {showTitle && (
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      )}
    </HeaderDiv>
  )
}

export default Header
