import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/User'


export const store = configureStore({
  reducer :{
    auth: userReducer,
  }
})