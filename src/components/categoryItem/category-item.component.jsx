import "./category-item.styles.scss"

const CategoryItem = ({ category }) => {
    const {title, id , imageUrl} = category
    return (
        <div className="category__container" key={id}>
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