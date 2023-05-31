import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"
const CartDropdown = () => {
    const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext)
    const navigate = useNavigate()
    const checkoutHandler = () => {
        navigate("/checkout")
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className="cart__dropdown__container">
            <div className="cart__items">
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={checkoutHandler} >Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown