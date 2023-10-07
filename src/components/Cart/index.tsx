import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { remove, setTab } from '../../store/reducers/cart'
import { priceFormatter, getTotalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{priceFormatter(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </S.CartItem>
            ))}
          </ul>
          <S.Prices>
            <span>Valor total</span>
            <span>{priceFormatter(getTotalPrice(items))}</span>
          </S.Prices>
          <S.Button onClick={() => dispatch(setTab('delivery'))}>
            Continuar com a entrega
          </S.Button>
        </>
      ) : (
        <p className="empty-text">
          O carrinho está vazio, adicione sua refeição antes de prosseguir.
        </p>
      )}
    </S.CartContainer>
  )
}

export default Cart
