import { useGetRestaurantQuery } from '../../services/api'
import RestaurantList from '../../components/RestaurantsList'
import Loader from '../../components/Loader'

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
