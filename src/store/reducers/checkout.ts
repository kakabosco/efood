import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckoutState = {
  delivery: null | {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: null | {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const initialState: CheckoutState = {
  delivery: null,
  payment: null
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryData: (
      state,
      action: PayloadAction<(typeof initialState)['delivery']>
    ) => {
      state.delivery = action.payload
    },
    setPaymentData: (
      state,
      action: PayloadAction<(typeof initialState)['payment']>
    ) => {
      state.payment = action.payload
    }
  }
})

export const { setDeliveryData, setPaymentData } = checkoutSlice.actions

export default checkoutSlice.reducer
