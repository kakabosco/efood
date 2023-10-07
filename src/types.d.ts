declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

declare type Dish = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
