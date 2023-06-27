import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg"
// import { useContext } from "react"
// import { CartContext } from "../../context/cart.context"
import { useSelector } from "react-redux"
import { selectCartCount } from "../../store/cart/cart.selectors"
const CartIcon = () => {
    // const { cartItemsCount } = useContext(CartContext)
    const cartItemsCount = useSelector(selectCartCount)
    return (
        <div className="cart__icon__container">
            <ShoppingCartIcon className="shopping__icon" />
            <span className="item__count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon