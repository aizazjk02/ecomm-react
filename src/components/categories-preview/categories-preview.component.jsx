import "./categories-preview.styles.scss"
import { useContext } from "react"
import { CategoriesContext } from "../../context/categories.context"
import CategoryPreview from "../category-preview/category-preview.component"
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
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