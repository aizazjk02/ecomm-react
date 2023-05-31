import "./cart-item.styles.scss"
const CartItem = ({ cartItem }) => {
    console.log("🚀 ~ file: cart-item.component.jsx:3 ~ CartItem ~ cartItem:", cartItem)

    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className="cart__item__container">
            <img src={imageUrl} alt={name} />
            <div className="item__details">
                <h2 className="name">{name}</h2>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem