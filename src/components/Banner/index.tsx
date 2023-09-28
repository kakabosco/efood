import { Image, Info, Title } from './styles'
import { Props as RestaurantProps } from '../Restaurant'

type BannerProps = Omit<
  RestaurantProps,
  'image' | 'rating' | 'description' | 'about'
> & {
  bannerImg: string
}

const Banner = ({ infos, title, bannerImg }: BannerProps) => (
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
