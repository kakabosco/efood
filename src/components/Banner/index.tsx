import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Restaurant } from '../../pages/Home'
import { Image, Info, Title } from './styles'

const Banner = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setRestaurant(response))
  }, [id])

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
