import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery : fetchBaseQuery({baseUrl: "https://dummyjson.com/"}), 
    endpoints: (builder)=>({
        getAllProducts : builder.query({
            query: ()=> "products",        
        }),
        getSingleProducts : builder.query({
            query: (singleproduct)=> `products/${singleproduct}`,        
        }),
        getProductCategory : builder.query({
            query: ()=> "products/categories",        
        }),
        getByCategories : builder.query({
            query: (searchQuery)=> `/products/category/${searchQuery}`,        
        }),
        getSearchProduct : builder.query({
            query: (searchQuery)=> `products/search?q=${searchQuery}`,        
        }),
    })
    
})

export const { useGetAllProductsQuery, useGetProductCategoryQuery, useGetSearchProductQuery, useGetByCategoriesQuery, useGetSingleProductsQuery } = productApi

