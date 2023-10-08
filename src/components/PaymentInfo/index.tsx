import * as Yup from 'yup'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { setPaymentData } from '../../store/reducers/checkout'
import { close, clear, setTab } from '../../store/reducers/cart'
import { getTotalPrice, priceFormatter } from '../../utils'

import * as S from '../../styles'

const DeliveryInfo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { delivery, payment } = useSelector((state: RootReducer) => ({
    delivery: state.checkout.delivery,
    payment: state.checkout.payment
  }))
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiverName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Nome obrigatório'),
      cardNumber: Yup.string().required('Número do cartão obrigatório'),
      cardCode: Yup.string().required('Código do cartão obrigatória'),
      cardMonth: Yup.string().required('Mês de vencimento obrigatório'),
      cardYear: Yup.string().required('Ano de vencimento obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        setPaymentData({
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        })
      )

      if (delivery && payment) {
        purchase({
          delivery,
          payment,
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          }))
        })
      }

      // purchase({
      //   delivery: {
      //     receiver: values.receiverName,
      //     address: {
      //       description: values.address,
      //       city: values.city,
      //       zipCode: values.zipCode,
      //       number: Number(values.number),
      //       complement: values.complement
      //     }
      //   },
      //   payment: {
      //     card: {
      //       name: values.cardName,
      //       number: values.cardNumber,
      //       code: Number(values.cardCode),
      //       expires: {
      //         month: Number(values.cardMonth),
      //         year: Number(values.cardYear)
      //       }
      //     }
      //   },
      //   products: items.map((item) => ({
      //     id: item.id,
      //     price: item.preco as number
      //   }))
      // })
    }
  })

  const checkInputHasError = (name: string) => {
    const isTouched = name in form.touched
    const isInvalid = name in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const confirmPayment = () => {
    form.handleSubmit()
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const confirmOrder = () => {
    dispatch(close())
    navigate('/')
  }

  if (items.length === 0 && !isSuccess) {
    return null
  }

  return (
    <>
      {isSuccess && data ? (
        <S.Tab>
          <h4>Pedido realizado - {data.orderId}</h4>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <S.Button onClick={confirmOrder}>Concluir</S.Button>
        </S.Tab>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.Tab>
            <h4>
              Pagamento - Valor a pagar {priceFormatter(getTotalPrice(items))}{' '}
            </h4>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask={'9999 9999 9999 9999'}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="90px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  mask={'999'}
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                  value={form.values.cardMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardMonth') ? 'error' : ''}
                  mask={'99'}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="cardYear"
                  name="cardYear"
                  value={form.values.cardYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardYear') ? 'error' : ''}
                  mask={'9999'}
                />
              </S.InputGroup>
            </S.Row>
            <S.Button
              type="submit"
              onClick={confirmPayment}
              disabled={isLoading}
            >
              {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
            </S.Button>
            <S.Button
              onClick={() => dispatch(setTab('delivery'))}
              disabled={isLoading}
            >
              Voltar para dados de entrega
            </S.Button>
          </S.Tab>
        </form>
      )}
    </>
  )
}

export default DeliveryInfo
