import Dish from '../Dish'

import { List } from './styles'

type Props = {
  dishes: Dish[]
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
