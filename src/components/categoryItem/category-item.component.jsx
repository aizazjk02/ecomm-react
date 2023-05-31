import "./category-item.styles.scss"
import { useNavigate } from "react-router-dom"
const CategoryItem = ({ category }) => {
    const { title, id, imageUrl } = category
    const navigate = useNavigate()
    return (
        <div className="category__item__container" key={id} onClick={() => navigate(`/shop/${title}`)}>
            <div className="background__image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="category__body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem