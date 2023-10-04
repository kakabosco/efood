import { Link } from 'react-router-dom'
import {
  Card,
  Infos,
  Tag,
  InfoContainer,
  Title,
  RatingDiv,
  Rating,
  Description,
  About
} from './styles'
import estrela from '../../assets/images/estrela.png'

export type Props = {
  infos: string[]
  image: string
  title: string
  rating: number
  description: string
  id: number
}

const Restaurant = ({
  infos,
  image,
  title,
  rating,
  description,
  id
}: Props) => {
  const getDescriptionR = (description: string) => {
    if (description.length > 150) {
      return description.substring(0, 147) + '...'
    }
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <InfoContainer>
        <div>
          <Title>{title}</Title>
          <RatingDiv>
            <Rating>{rating}</Rating>
            <img src={estrela} alt="Avaliação" />
          </RatingDiv>
        </div>
        <Description>{getDescriptionR(description)}</Description>
        <Link to={`/restaurants/${id}`}>
          <About>Saiba Mais</About>
        </Link>
      </InfoContainer>
    </Card>
  )
}

export default Restaurant
