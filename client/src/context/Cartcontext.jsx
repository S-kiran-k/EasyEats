import { createContext } from "react"

const Cartcontext = createContext({
    cartData : [],
    addProduct : () => {},
    clearCart : () => {} ,
    deleteProduct: () => {},
    updateProduct :()=>{}
})

export default Cartcontext