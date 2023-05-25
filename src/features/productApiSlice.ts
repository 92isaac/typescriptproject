import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../constant/helpers'


export const productApiSlice = createApi({
    reducerPath: "productApiSlice",
    baseQuery : fetchBaseQuery({baseUrl: API_URL}), 
    endpoints: (builder)=>({
        getAllProducts : builder.query({
            query: ()=> "/products",        
        }),
        getPaginateProduct : builder.query({
            query: (pagin)=> `/products?limit=${pagin}`,        
        }),
        getSingleProducts : builder.query({
            query: (singleproduct)=> `/products/${singleproduct}`,        
        }),
        getProductCategory : builder.query({
            query: ()=> "/products/categories",        
        }),
        getByCategories : builder.query({
            query: (searchQuery)=> `/products/category/${searchQuery}`,        
        }),
        getSearchProduct : builder.query({
            query: (searchQuery)=> `/products/search?q=${searchQuery}`,        
        }),
        getUsers : builder.query({
            query: ()=> `/users`,        
        }),
    })
    
})

export const { useGetAllProductsQuery, useGetProductCategoryQuery, useGetSearchProductQuery, useGetByCategoriesQuery, useGetSingleProductsQuery, useGetPaginateProductQuery, useGetUsersQuery } = productApiSlice

