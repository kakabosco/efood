import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { priceFormatter } from '../../utils'
import { add, open, setTab } from '../../store/reducers/cart'

import close from '../../assets/images/fechar.png'

import * as S from './styles'

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
      <S.Card>
        <img src={dish.foto} alt={dish.nome} />
        <S.Title>{dish.nome}</S.Title>
        <S.Description>{getDescriptionD(dish.descricao)}</S.Description>
        <S.MoreButton onClick={() => setModal({ isOpenM: true })}>
          Mais detalhes
        </S.MoreButton>
      </S.Card>
      <S.Modal className={modal.isOpenM ? 'active' : ''}>
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
          <S.ModalContent>
            <img src={dish.foto} alt={dish.nome} />
            <div>
              <S.Title>{dish.nome}</S.Title>
              <S.Description>{dish.descricao}</S.Description>
              <S.Portion>Serve {dish.porcao}</S.Portion>
              <S.AddCart onClick={addToCart}>
                Adicionar ao carrinho - {priceFormatter(dish.preco)}
              </S.AddCart>
            </div>
          </S.ModalContent>
        </div>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default Dish
