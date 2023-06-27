import "./pop-up.styles.scss"
const PopUp = ({content}) => {
    return (
        <div className="notification">
        {content}
        </div>
    )
}

export default PopUp