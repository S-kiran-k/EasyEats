import { Outlet } from "react-router-dom"
import Footer from "../component/Footer/Footer"
import Header from "../component/Header/Header"
import { Toaster } from "sonner"
// import Usercontext from '../context/Usercontext';
import Cartcontext from './../context/Cartcontext';
import { useState } from 'react';
import Usercontext from "../context/Usercontext";

function Applayout() {
  //   const dummydata = {
  //     id: "name",
  //     names: "hello",
  //     age: 18

  //   }
  const [cartData, setCartData] = useState([])
  const [data , setData] = useState()

  const addProduct = (data) => {
    setCartData([...cartData, data])
  }
  const clearCart = () => {
    setCartData([])
  }
  const deleteProduct = (id) => {
    cartData.filter((e) => {
      return e.id != id
    })
  }
  return (
    <>
      <Usercontext.Provider value={{name:"" , }}>
        <Cartcontext.Provider value={{ cartData: cartData, addProduct, clearCart, deleteProduct }}>
          <Header />
          <Outlet />
          <Footer />
        </Cartcontext.Provider>
      </Usercontext.Provider>
      <Toaster richColors position="top-right" closeButton />

    </>
  )
}

export default Applayout