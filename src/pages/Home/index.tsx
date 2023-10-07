import { useGetRestaurantQuery } from '../../services/api'
import RestaurantList from '../../components/RestaurantsList'

const Home = () => {
  const { data: restaurants } = useGetRestaurantQuery()

  if (restaurants) {
    return (
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
