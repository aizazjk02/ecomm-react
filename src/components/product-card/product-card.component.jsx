import "./product-card.styles.scss"
import Button from "../button/button.component"
const ProductCard = ({ product }) => {
    const { price, id, name, imageUrl } = product
    return (<div className="product__card__container" key={id}>
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <Button>Add to Cart</Button>
    </div>)
}

export default ProductCard