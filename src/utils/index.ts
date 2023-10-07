import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const priceFormatter = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((acc, item) => {
    if (item.preco) {
      return (acc += item.preco)
    }
    return 0
  }, 0)
}

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
