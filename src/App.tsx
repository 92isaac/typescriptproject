import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './route/Home'
import InitialSpinner  from "./components/commonfiles/InitialSpinner";
import SharedLayout from "./components/commonfiles/SharedLayout";
import { Marketplace } from "./components/Marketplace";
import Cart from "./route/Cart";
// import Footer from "./components/commonfiles/Footer";

function App() {
  const [loading, setLoading] = useState(true);
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
      <Route path="/cart" element={<Cart/>} />
      </Route>
    </Routes>
    </div>}
    </>
  )
}

export default App
