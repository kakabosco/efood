import Restaurant from '../Restaurant'

import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags: string[] = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(
        restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)
      )
    }

    return tags
  }

  return (
    <div>
      <List>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Restaurant
              id={restaurant.id}
              infos={getRestaurantTags(restaurant)}
              image={restaurant.capa}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
