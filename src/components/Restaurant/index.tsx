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

type Props = {
  infos: string[]
  image: string
  title: string
  rating: number
  description: string
  about: string
}

const Restaurant = ({
  infos,
  image,
  title,
  rating,
  description,
  about
}: Props) => (
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
      <Description>{description}</Description>
      <Link to={about}>
        <About>Saiba Mais</About>
      </Link>
    </InfoContainer>
  </Card>
)

export default Restaurant
