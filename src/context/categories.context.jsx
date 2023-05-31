import { createContext, useState } from "react";
import { useEffect } from "react";
// import {SHOP_DATA} from "../assets/shop-data"
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
    catgeoriesMap: {},
    setProducts:() => {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            // console.log(categoriesMap)
            setCategoriesMap(categoriesMap)
        }

        getCategoriesMap()
        // addCollectionAndDocuments("categories",SHOP_DATA )
    }, [])
    const providerValues = {categoriesMap, setCategoriesMap}
    return (
        <CategoriesContext.Provider value={providerValues}>{ children}</CategoriesContext.Provider>
    )
}