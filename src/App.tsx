import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './route/Home.tsx'
import InitialSpinner  from "./components/commonfiles/InitialSpinner.tsx";
import SharedLayout from "./components/commonfiles/SharedLayout.tsx";
import { Marketplace } from "./components/Marketplace.tsx";
import Cart from "./route/Cart.tsx";
import ProductSearch from "./route/ProductSearch.tsx";
import SignIn from "./route/SignIn.tsx";
import { useAppDispatch } from "./constant/hooks.ts";
import { setUser } from "./features/authSlice.ts";
import AllProduct from "./route/AllProduct.tsx";


function App() {
  const dispatch = useAppDispatch()
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    dispatch(setUser(user));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  return (
    <>
    {loading ? (<InitialSpinner load={loading} />) : <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>} />
      <Route path="/:id" element={<Marketplace/>} />
      <Route path="/searchresult" element={<ProductSearch/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/products" element={<AllProduct/>} />
      </Route>
    </Routes>
    </div>}
    </>
  )
}

export default App
