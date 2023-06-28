import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
// import { useContext } from "react"
// import { CartContext } from "../../context/cart.context"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selectors"
import { setIsCartOpen } from "../../store/cart/cart.reducer"
const CartDropdown = () => {
    // const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const checkoutHandler = () => {
        if (cartItems.length === 0)
            alert("cart is empty")
        else {
            navigate("/checkout")
            dispatch(setIsCartOpen(!isCartOpen))
        }
    }
    return (
        <div className="cart__dropdown__container">
            <div className="cart__items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={checkoutHandler} >Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown