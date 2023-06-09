import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constant/helpers';


// const API_URL = 'https://dummyjson.com/auth';
// console.log(API_URL + '/login')

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (builder)=>({
        loginUser: builder.mutation({
            query:(body: {username: string; password: string}) =>{
                return {
                    url:"/auth/login",
                    method: "POST",
                    body,
                }
            }
        })
    })
})

export const { useLoginUserMutation } = authApi