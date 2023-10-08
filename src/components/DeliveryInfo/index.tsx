import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { setTab } from '../../store/reducers/cart'
import { setDeliveryData } from '../../store/reducers/checkout'

import * as S from '../../styles'

const DeliveryInfo = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const dispatch = useDispatch()

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
      receiverName: Yup.string()
        .min(3, 'Nome muito curto')
        .required('Nome obrigatório'),
      address: Yup.string().required('Endereço obrigatório'),
      city: Yup.string().required('Cidade obrigatória'),
      zipCode: Yup.string().required('CEP obrigatório'),
      number: Yup.number().required('Número obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(
        setDeliveryData({
          receiver: values.receiverName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        })
      )
      setFormSubmitted(true)
    }
  })

  const checkInputHasError = (name: string) => {
    const isTouched = name in form.touched
    const isInvalid = name in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const confirmDelivery = () => {
    form.handleSubmit()
  }

  useEffect(() => {
    if (formSubmitted) {
      dispatch(setTab('payment'))
    }
  }, [dispatch, formSubmitted])

  if (items.length === 0 && !formSubmitted) {
    return null
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.Tab>
        <h4>Entrega</h4>
        <S.InputGroup>
          <label htmlFor="receiverName">Quem irá receber</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={form.values.receiverName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('receiverName') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('address') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('city') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <InputMask
              type="text"
              id="zipCode"
              name="zipCode"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('zipCode') ? 'error' : ''}
              mask="99999-999"
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('number') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>
        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('complement') ? 'error' : ''}
          />
        </S.InputGroup>
        <S.Button type="submit" onClick={confirmDelivery}>
          Continuar com o pagamento
        </S.Button>
        <S.Button onClick={() => dispatch(setTab('cart'))}>
          Voltar para o carrinho
        </S.Button>
      </S.Tab>
    </form>
  )
}

export default DeliveryInfo
