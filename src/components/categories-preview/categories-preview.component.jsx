import "./categories-preview.styles.scss"
// import { useState } from "react"
// import { CategoriesContext } from "../../context/categories.context"
import CategoryPreview from "../category-preview/category-preview.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selectors"
const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext)
    
    const categoriesMap = useSelector(selectCategoriesMap)
    // console.log("🚀 ~ file: shop.component.jsx:7 ~ CategoriesPreview ~ catgeoriesMap:", categoriesMap)

    return (
        <div>
            {
                Object.keys(categoriesMap).map(title => <CategoryPreview key={title} title={title} products={categoriesMap[title]} />)
            }

        </div>
    )
}

export default CategoriesPreview