import CategoryItem from "../categoryItem/category-item.component"
import "./directory.styles.scss"
const Directory = ({ categories }) => {
    return (
        <div className="categories__container">
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    )
}

export default Directory