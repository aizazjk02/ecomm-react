import "./checkout.styles.scss"
import { CartContext } from "../../../context/cart.context"
import { useContext } from "react"
import CheckoutItem from "../../checkout-item/checkout-item.component"
const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className="checkout__container">
            <div className="checkout__header">
                <div className="header__block">
                    <span>Product</span>
                </div>
                <div className="header__block">
                    <span>Description</span>
                </div>
                <div className="header__block">
                    <span>Quantity</span>
                </div>
                <div className="header__block">
                    <span>Price</span>
                </div>
                <div className="header__block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

            <span className="total">Total : ${cartTotal}</span>
        </div>
    )
}

export default Checkout 