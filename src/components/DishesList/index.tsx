import Dish from '../Dish'
import { List } from './styles'
import { Dish as DishM } from '../../pages/Home'

type Props = {
  dishes: DishM[]
}

const DishesList = ({ dishes }: Props) => (
  <div className="container">
    <List>
      {dishes.map((dish) => (
        <li key={dish.id}>
          <Dish
            image={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            portion={dish.porcao}
            price={dish.preco}
          />
        </li>
      ))}
    </List>
  </div>
)

export default DishesList
