import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
const CartIcon = () => {
    const { cartItemsCount } = useContext(CartContext)
    return (
        <div className="cart__icon__container">
            <ShoppingCartIcon className="shopping__icon" />
            <span className="item__count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon