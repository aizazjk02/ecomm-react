import { CartContext } from "../../context/cart.context"
import "./checkout-item.styles.scss"
import { useContext } from "react"
const CheckoutItem = ({ cartItem }) => {
    const { addProductToCart, removeProductFromCart, clearProductFromCart } = useContext(CartContext)
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <div className="checkout__item__container">
            <div className="image__container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={() => removeProductFromCart(cartItem)}>&#10094;</div>
                <span className="value">
                    {quantity}
                </span>
                <div className="arrow" onClick={() => addProductToCart(cartItem)}>&#10095;</div>
            </span>

            <span className="price">{price}</span>
            <div className="remove__button" onClick={() => clearProductFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem