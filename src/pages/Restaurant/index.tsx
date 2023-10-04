import { useParams } from 'react-router-dom'
import { useGetDishesQuery } from '../../services/api'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import Cart from '../../components/Cart'

const Restaurant = () => {
  const { id } = useParams()
  const { data: restaurantData } = useGetDishesQuery(id!)
  const dishes = restaurantData?.cardapio

  if (!dishes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner />
      <div className="container">
        <DishesList dishes={dishes} />
      </div>
      <Cart />
    </>
  )
}

export default Restaurant
