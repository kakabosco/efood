import { useGetRestaurantQuery } from '../../services/api'
import RestaurantList from '../../components/RestaurantsList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

export type Dish = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

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
