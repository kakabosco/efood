import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import DishM from '../../models/Dish'
import trattoriaDish from '../../assets/images/trattoria3.png'
import trattoriaBanner from '../../assets/images/trattoria2.png'

const dishes: DishM[] = [
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 11
  },
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 12
  },
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 13
  },
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 14
  },
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 15
  },
  {
    image: trattoriaDish,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 16
  }
]

const LaDolceVita = () => (
  <>
    <Banner
      infos={['Italiana']}
      title="La Dolce Vita Trattoria"
      bannerImg={trattoriaBanner}
    />
    <div className="container">
      <DishesList dishes={dishes} />
    </div>
  </>
)

export default LaDolceVita
