import "./shop.styles.scss"
import { useContext } from "react"
import { ProductsContext } from "../../../context/products.context"
import ProductCard from "../../product-card/product-card.component"
const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="products__container">
            {products.map((product) => (
               <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop