import Dish from '../Dish'
import DishM from '../../models/Dish'
import { List } from './styles'

type Props = {
  dishes: DishM[]
}

const DishesList = ({ dishes }: Props) => (
  <div className="container">
    <List>
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          image={dish.image}
          title={dish.title}
          description={dish.description}
        />
      ))}
    </List>
  </div>
)

export default DishesList
