import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { FooterDiv, SocialMedia } from './styles'

const Footer = () => (
  <FooterDiv>
    <img src={logo} alt="" />
    <SocialMedia>
      <a href="https://www.instagram.com">
        <img src={instagram} alt="Instagram Logo" />
      </a>
      <a href="https://www.facebook.com">
        <img src={facebook} alt="Facebook Logo" />
      </a>
      <a href="https://www.twitter.com">
        <img src={twitter} alt="Twitter Logo" />
      </a>
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterDiv>
)

export default Footer
