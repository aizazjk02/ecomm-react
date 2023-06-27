import "./product-card.styles.scss"
import Button from "../button/button.component"
// import { useContext } from "react"
// import { CartContext } from "../../context/cart.context"
import { useSelector, useDispatch } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selectors"
import { addProductToCart } from "../../store/cart/cart.actions"
import { useState } from "react"
import PopUp from "../pop-up/pop-up.component"
const ProductCard = ({ product, popUpHandler }) => {
    const { price, id, name, imageUrl } = product
    // const { addProductToCart } = useContext(CartContext)
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    
    const addToCartHandler = () => {
        dispatch(addProductToCart(cartItems, product))
        popUpHandler()
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