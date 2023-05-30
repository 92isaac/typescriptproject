import { configureStore } from '@reduxjs/toolkit'
import {authApi } from './authApi'
import { productApiSlice } from './productApiSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import searchRducer from './searchSlice'
import { cartApi } from './cartApiSlice'


export const store = configureStore({
  reducer :{
    auth: authReducer,
    cart: cartReducer,
    search: searchRducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [cartApi.reducerPath]: cartApi.reducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(authApi.middleware).concat(productApiSlice.middleware).concat(cartApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)