import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './features/store.tsx'
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productApi } from './features/apiSlice.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productApi}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
)
