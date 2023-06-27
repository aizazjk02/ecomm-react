import "./category.styles.scss"
import { useParams } from "react-router-dom"
import {  useEffect, useState } from "react"
// import { CategoriesContext } from "../../context/categories.context"
import ProductCard from "../product-card/product-card.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/categories.selectors"
const Category = () => {
    const { category } = (useParams())
    console.log("🚀 ~ file: category.component.jsx:8 ~ Category ~ category:", category)
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap)
    // console.log("🚀 ~ file: category.component.jsx:9 ~ Category ~ categoriesMap:", categoriesMap)

    const [products, setProducts] = useState([])
    // console.log("🚀 ~ file: category.component.jsx:13 ~ Category ~ products:", products)

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <>
            <h2 className="title">{category}</h2>
            <div className="category__container">
                {products && products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default Category