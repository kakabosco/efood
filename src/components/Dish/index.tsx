import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { priceFormatter } from '../../utils'
import { add, open, setTab } from '../../store/reducers/cart'

import close from '../../assets/images/fechar.png'

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

type Props = {
  dish: Dish
}

type ModalState = {
  isOpenM: boolean
}

const Dish = ({ dish }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isOpenM: false
  })
  const dispatch = useDispatch()

  const closeModal = () => {
    setModal({
      isOpenM: false
    })
  }

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(setTab('cart'))
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
