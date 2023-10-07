import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Dish[]
  isOpen: boolean
  currentTab: string
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentTab: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)
      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('O prato já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    setTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload
    }
  }
})

export const { add, remove, open, close, clear, setTab } = cartSlice.actions
export default cartSlice.reducer
