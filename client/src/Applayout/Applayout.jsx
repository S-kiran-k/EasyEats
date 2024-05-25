import { Outlet } from "react-router-dom"
import Footer from "../component/Footer/Footer"
import Header from "../component/Header/Header"
import { Toaster } from "sonner"

function Applayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Toaster richColors position="top-right" closeButton />

    </>
  )
}

export default Applayout