import { useParams } from 'react-router-dom'
import { useGetBannerQuery } from '../../services/api'
import { Image, Info, Title } from './styles'

const Banner = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetBannerQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <Info>
          {restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)}
        </Info>
        <Title>{restaurant.titulo}</Title>
      </div>
    </Image>
  )
}

export default Banner
