// import { CartContext } from "../../context/cart.context"
// import Button from "../button/button.component"
import "./checkout-item.styles.scss"
// import { useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addProductToCart, removeProductFromCart, clearProductFromCart } from "../../store/cart/cart.reducer"
import { selectCartItems } from "../../store/cart/cart.selectors"
const CheckoutItem = ({ cartItem }) => {
    // const { addProductToCart, removeProductFromCart, clearProductFromCart } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <div className="checkout__item__container">
            <div className="image__container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="details">
                <span className="name">{name}</span>

                <p>Quantity</p>
                <span className="quantity">
                    <div className="arrow" onClick={() => dispatch(removeProductFromCart(cartItems, cartItem))}>&#10094;</div>
                    <span className="value">
                        {quantity}
                    </span>
                    <div className="arrow" onClick={() => dispatch(addProductToCart(cartItems, cartItem))}>&#10095;</div>
                </span>
                <p>Price</p>
                <span className="price">${price}</span>
                <button onClick={() => dispatch(clearProductFromCart(cartItems, cartItem))}>remove</button>
            </div>
        </div>
    )
}

export default CheckoutItem