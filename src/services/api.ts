import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getBanner: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getDishes: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantQuery, useGetBannerQuery, useGetDishesQuery } =
  api
export default api
