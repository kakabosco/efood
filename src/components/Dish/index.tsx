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

type Props = {
  image: string
  title: string
  description: string
  portion: string
  price: number
}

type ModalState = {
  isOpen: boolean
}

const Dish = ({ image, title, description, portion, price }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false
  })

  const closeModal = () => {
    setModal({
      isOpen: false
    })
  }

  const getDescriptionD = (description: string) => {
    if (description.length > 150) {
      return description.substring(0, 147) + '...'
    }
  }

  const priceFormatter = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescriptionD(description)}</Description>
        <MoreButton onClick={() => setModal({ isOpen: true })}>
          Mais detalhes
        </MoreButton>
      </Card>
      <Modal className={modal.isOpen ? 'active' : ''}>
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
            <img src={image} alt={title} />
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Portion>Serve {portion}</Portion>
              <AddCart>Adicionar ao carrinho - {priceFormatter(price)}</AddCart>
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
