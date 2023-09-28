import Restaurant from '../Restaurant'
import RestaurantM from '../../models/Restaurants'
import { List } from './styles'

type Props = {
  restaurants: RestaurantM[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          infos={restaurant.infos}
          image={restaurant.image}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          about={restaurant.about}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
