import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {
  Card,
  Title,
  Description,
  MoreButton,
  Modal,
  ModalContent,
  Portion,
  AddCart
} from './styles'
import close from '../../assets/images/fechar.png'
import { add, open } from '../../store/reducers/cart'
import { Dish as DishType } from '../../pages/Home'

type Props = {
  dish: DishType
}

type ModalState = {
  isOpenM: boolean
}

export const priceFormatter = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Dish = ({ dish }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isOpenM: false
  })

  const closeModal = () => {
    setModal({
      isOpenM: false
    })
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
    closeModal()
  }

  const getDescriptionD = (description: string) => {
    if (description.length > 135) {
      return description.substring(0, 132) + '...'
    }
  }

  return (
    <>
      <Card>
        <img src={dish.foto} alt={dish.nome} />
        <Title>{dish.nome}</Title>
        <Description>{getDescriptionD(dish.descricao)}</Description>
        <MoreButton onClick={() => setModal({ isOpenM: true })}>
          Mais detalhes
        </MoreButton>
      </Card>
      <Modal className={modal.isOpenM ? 'active' : ''}>
        <div className="container">
          <header>
            <img
              src={close}
              alt="ícone para fechar o modal"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          <ModalContent>
            <img src={dish.foto} alt={dish.nome} />
            <div>
              <Title>{dish.nome}</Title>
              <Description>{dish.descricao}</Description>
              <Portion>Serve {dish.porcao}</Portion>
              <AddCart onClick={addToCart}>
                Adicionar ao carrinho - {priceFormatter(dish.preco)}
              </AddCart>
            </div>
          </ModalContent>
        </div>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Dish
