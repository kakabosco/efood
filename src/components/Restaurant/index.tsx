import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'

import * as S from './styles'

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
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <S.Tag key={info}>{info}</S.Tag>
        ))}
      </S.Infos>
      <S.InfoContainer>
        <div>
          <S.Title>{title}</S.Title>
          <S.RatingDiv>
            <S.Rating>{rating}</S.Rating>
            <img src={estrela} alt="Avaliação" />
          </S.RatingDiv>
        </div>
        <S.Description>{getDescriptionR(description)}</S.Description>
        <Link to={`/restaurants/${id}`}>
          <S.About>Saiba Mais</S.About>
        </Link>
      </S.InfoContainer>
    </S.Card>
  )
}

export default Restaurant
