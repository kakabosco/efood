import { Image, Info, Title } from './styles'
import bannerImg from '../../assets/images/trattoria2.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Info>Italiana</Info>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
