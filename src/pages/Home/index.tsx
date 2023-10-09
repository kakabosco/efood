import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantsList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (restaurants) {
    return (
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    )
  }

  return <Loader />
}

export default Home
