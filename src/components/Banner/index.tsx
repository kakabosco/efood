import { Image, Info, Title } from './styles'
import bannerImg from '../../assets/images/trattoria2.png'
import { Props as RestaurantProps } from '../Restaurant'

type BannerProps = Omit<
  RestaurantProps,
  'image' | 'rating' | 'description' | 'about'
>

const Banner = ({ infos, title }: BannerProps) => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Info>
        {infos.map((info) => (
          <span key={info}>{info}</span>
        ))}
      </Info>
      <Title>{title}</Title>
    </div>
  </Image>
)

export default Banner
