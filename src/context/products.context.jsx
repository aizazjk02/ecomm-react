import { createContext , useEffect, useState} from "react";
import PRODUCTS from "../assets/shop-data.json"
export const ProductsContext = createContext({
    products: null,
    setProducts:() => {}
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(PRODUCTS)
    }, [])
    const providerValues = {products, setProducts}
    return (
        <ProductsContext.Provider value={providerValues}>{ children}</ProductsContext.Provider>
    )
}