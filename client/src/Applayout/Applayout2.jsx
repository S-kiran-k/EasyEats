import { Outlet } from "react-router-dom"
import Header from "../component/Header/Header"
import { Toaster } from "sonner"
// import Usercontext from '../context/Usercontext';
import Cartcontext from '../context/Cartcontext';
import { useState } from 'react';

function Applayout2() {
//   const dummydata = {
//     id: "name",
//     names: "hello",
//     age: 18

//   }
  const [cartData, setCartData] = useState([])

  const addProduct = (data) => {
    setCartData([...cartData, data])
  }
  const clearCart = () => {
    setCartData([])
  }
  const deleteProduct = (id) => {
    cartData.filter((e)=>{
      return e.id != id
    })
  }
  return (
    <>
    
      <Cartcontext.Provider value={{ cartData: cartData, addProduct, clearCart, deleteProduct }}>
        <Header />
        <Outlet />
      </Cartcontext.Provider>
      <Toaster richColors position="top-right" closeButton />

    </>
  )
}

export default Applayout2