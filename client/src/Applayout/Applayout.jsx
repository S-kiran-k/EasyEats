import { Outlet } from "react-router-dom"
import Footer from "../component/Footer/Footer"
import Header from "../component/Header/Header"
import { Toaster } from "sonner"
import Cartcontext from './../context/Cartcontext';
import { useState } from 'react';
import UserContext from "../context/UserContext";

function Applayout() {
  //   const dummydata = {
  //     id: "name",
  //     names: "hello",
  //     age: 18

  //   }
  const [cartData, setCartData] = useState([])
  // const [data , setData] = useState()

  const addProduct = (data) => { // create
    setCartData([...cartData, data])
  }
  const clearCart = () => {//clear
    setCartData([])
  }

  // const updateProduct = (itemId, quantity) => { // update
  //   const updatedData = cartData.map((item) => {
  //     if (item.u_id === itemId) {
  //       return { ...item, quantity: quantity };
  //     }
  //     return item;
  //   });
  //   setCartData(updatedData);
  // };
  const deleteProduct = (id) => {//delete
    console.log(id)
    const updatedCartItem = cartData.filter((e) => e.index !== id)
    setCartData(updatedCartItem)
  }



  return (
    <>
      <UserContext.Provider value={{ name: "", }}>
        <Cartcontext.Provider value={{ cartData: cartData, addProduct, clearCart, deleteProduct }}>
          <Header />
          <Outlet />
          <Footer />
        </Cartcontext.Provider>
      </UserContext.Provider>
      <Toaster richColors position="top-right" closeButton />

    </>
  )
}

export default Applayout