import "./checkout.styles.scss"
// import { CartContext } from "../../../context/cart.context"
import { useEffect } from "react"
import CheckoutItem from "../../checkout-item/checkout-item.component"
// import PaymentForm from "../../payment-form/payment-form.component"
import ShippingAddress from "../../shipping-address/shipping-address.component"
import Button from "../../button/button.component"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
// import { UserContext } from "../../../context/user.context"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"
import { selectCartItems, selectCartTotal } from "../../../store/cart/cart.selectors"
const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const [checkout, setCheckout] = useState(false)
    const navigate = useNavigate()
    const handleCheckout = () => {
        setCheckout(true)
    }
    useEffect(() => {
        if (!currentUser) {
            navigate("/auth")
        }
        else if (!cartItems.length) navigate("/")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems, currentUser])
    return (
        <>
            {
                checkout ? (<ShippingAddress setCheckout={setCheckout} />) : (
                    <div className="checkout">
                        <div className="checkout__container">
                            {
                                /**
                                 * <div className="checkout__header">
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
                                <span></span>
                                </div>
                                </div>
                                */
                            }

                            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                        </div>
                        <div>
                            <span className="total">Total : ${cartTotal}</span>
                            <Button onClick={handleCheckout}>Checkout</Button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Checkout 