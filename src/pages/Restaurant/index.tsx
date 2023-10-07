import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import AsideTab from '../../container/AsideTab'
import DishesList from '../../components/DishesList'

import { useGetDishesQuery } from '../../services/api'

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
      <div>
        <DishesList dishes={dishes} />
      </div>
      <AsideTab />
    </>
  )
}

export default Restaurant
