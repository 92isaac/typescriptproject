import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './route/Home.tsx'
import InitialSpinner  from "./components/commonfiles/InitialSpinner.tsx";
import SharedLayout from "./components/commonfiles/SharedLayout.tsx";
import Cart from "./route/Cart.tsx";
import ProductSearch from "./route/ProductSearch.tsx";
import SignIn from "./route/SignIn.tsx";
import { useAppDispatch } from "./constant/hooks.ts";
import { setUser } from "./features/authSlice.ts";
import AllProduct from "./route/AllProduct.tsx";
import NotFoundPage from "./route/NotFound.tsx";
import ScrollToTop from "./constant/ScrollToTop.tsx";
import Profile from "./route/Profile.tsx";
import ProtectedRoute from "./route/ProtectedRoute.tsx";
import { ProductInDetails } from "./route/ProductInDetails.tsx";
// import Payment from "./route/Payment.tsx";
import FlutterW from "./components/FlutterW.tsx";
import PaymentSuccessPage from "./route/PaymentSuccessPage.tsx";


function App() {
  const dispatch = useAppDispatch()
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const [loading, setLoading] = useState(false);
console.log(user)
  useEffect(()=>{
    dispatch(setUser(user));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    {loading ? (<InitialSpinner load={loading} />) : <div>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>} />
      <Route path="/product/:id" element={<ProductInDetails/>} />
      <Route path="/searchresult" element={<ProductSearch/>} />
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      <Route path="/login" element={<SignIn/>} />
      {/* <Route path="/payment" element={<Payment/>} /> */}
      <Route path="/flutter" element={<FlutterW/>} />
      <Route path="/products" element={<AllProduct/>} />
      <Route path="/payment-success" element={<PaymentSuccessPage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </div>}
    </>
  )
}

export default App