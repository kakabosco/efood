import RestaurantList from '../../components/RestaurantsList'
import RestaurantM from '../../models/Restaurants'
import hioki from '../../assets/images/hioki_sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const restaurants: RestaurantM[] = [
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: hioki,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    about: '/',
    id: 1
  },
  {
    infos: ['Italiana'],
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    about: '/la-dolce-vita',
    id: 2
  },
  {
    infos: ['Italiana'],
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    about: '/la-dolce-vita',
    id: 3
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: hioki,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    about: '/',
    id: 4
  },
  {
    infos: ['Destaque da semana', 'Japonesa'],
    image: hioki,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    about: '/',
    id: 5
  },
  {
    infos: ['Italiana'],
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    about: '/la-dolce-vita',
    id: 6
  }
]

const Home = () => (
  <div className="container">
    <RestaurantList restaurants={restaurants} />
  </div>
)

export default Home
