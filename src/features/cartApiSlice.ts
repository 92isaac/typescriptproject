import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constant/helpers';


export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (builder)=>({
        addCart: builder.mutation({
            query:(body: {id: number; quantity: number}) =>{
                return {
                    url:"/carts/add",
                    method: "POST",
                    body,
                }
            }
        }),
        getUserCart : builder.query({
            query: (userId)=> `/users/${userId}/carts`,        
        }),
    })
})

export const { useAddCartMutation, useGetUserCartQuery } = cartApi


