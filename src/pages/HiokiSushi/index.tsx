import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import DishM from '../../models/Dish'
import hiokiDish from '../../assets/images/hioki_sushi3.png'
import hiokiBanner from '../../assets/images/hioki_sushi2.png'

const dishes: DishM[] = [
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 20
  },
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 21
  },
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 22
  },
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 23
  },
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 24
  },
  {
    image: hiokiDish,
    title: 'Sashimi Atum - 12 unidades',
    description:
      'Mergulhe no profundo oceano de delícias com o nosso Combinado Atum Supremo! Composto por 12 peças primorosamente preparadas, este conjunto é a verdadeira expressão da arte culinária japonesa.',
    id: 25
  }
]

const HiokiSushi = () => (
  <>
    <Banner infos={['Japonesa']} title="Hioki Sushi" bannerImg={hiokiBanner} />
    <div className="container">
      <DishesList dishes={dishes} />
    </div>
  </>
)

export default HiokiSushi
