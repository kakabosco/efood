import { Card, Title, Description, AddCart } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Dish = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <AddCart>Adicionar ao carrinho</AddCart>
  </Card>
)

export default Dish
