import CategoriesPreview from "../../categories-preview/categories-preview.component"
import Category from "../../category/category.component"
import "./shop.styles.scss"
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils"
import { useDispatch } from "react-redux"
import { setCategoriesMap } from "../../../store/categories/categories.reducer"
const Shop = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            // console.log(categoriesMap)
            dispatch(setCategoriesMap(categoriesMap))
        }

        getCategoriesMap()
        // addCollectionAndDocuments("categories",SHOP_DATA )
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={ <Category/>} />
        </Routes>
    )
}

export default Shop