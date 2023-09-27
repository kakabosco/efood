import { HeaderDiv, Title, LogoDiv } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderDiv>
    <LogoDiv>
      <img src={logo} alt="Logo" />
    </LogoDiv>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderDiv>
)

export default Header
