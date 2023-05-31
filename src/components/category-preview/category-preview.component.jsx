import ProductCard from "../product-card/product-card.component"
import "./category-preview.styles.scss"
import { useNavigate } from "react-router-dom"
const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    return (
        <div className="category__preview__container">
            <h2>
                <span className="title" onClick={() => navigate(title)}>{ title}</span>
            </h2>
            <div className="preview">
                {
                    products.filter((_, idx) => idx < 4)
                    .map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default CategoryPreview