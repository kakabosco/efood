import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import { Dish, Restaurant as RestaurantM } from '../Home'

const Restaurant = () => {
  const { id } = useParams()
  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response: RestaurantM) => setDishes(response.cardapio))
  }, [id])

  return (
    <>
      <Banner />
      <div className="container">
        <DishesList dishes={dishes} />
      </div>
    </>
  )
}

export default Restaurant
