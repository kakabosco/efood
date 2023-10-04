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
          <Dish dish={dish} />
        </li>
      ))}
    </List>
  </div>
)

export default DishesList
