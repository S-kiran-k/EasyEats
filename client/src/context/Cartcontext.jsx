import { createContext } from "react"

const Cartcontext = createContext({
    cartData : [],
    addProduct : () => {},
    clearCart : () => {} ,
    deleteProduct: () => {}

})

export default Cartcontext