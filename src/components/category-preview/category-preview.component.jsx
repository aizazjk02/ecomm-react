import ProductCard from "../product-card/product-card.component"
import "./category-preview.styles.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import PopUp from "../pop-up/pop-up.component"
const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const [showPopUp, setPopUp] = useState(false)
    const popUpHandler = () => {
        setPopUp(true)
        setTimeout(() => { setPopUp(false) }, 1000)
    }
    return (
        <>
            {showPopUp ? <PopUp content={"Added to Cart!"}/> : ""}
            <div className="category__preview__container">

                <h2>
                    <span className="title" onClick={() => navigate(title)}>{title}</span>
                </h2>
                <div className="preview">
                    {
                        products.filter((_, idx) => idx < 4)
                            .map(product => <ProductCard key={product.id} product={product} popUpHandler={popUpHandler} />)
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryPreview