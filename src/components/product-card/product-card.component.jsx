import "./product-card.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
const ProductCard = ({ product }) => {
    const { price, id, name, imageUrl } = product
    const { addProductToCart } = useContext(CartContext)
    const addToCartHandler = () => {
        addProductToCart(product)
    }
    return (
        <div className="product__card__container" key={id}>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>)
}

export default ProductCard