import { Outlet, Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../context/user.context"
import { ReactComponent as LogoIcon } from "../../../assets/crown.svg"
import "./navbar.styles.scss"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../../context/cart.context"
const Navbar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const handleSignOut = async () => {
        try {
            await signOutUser()
        } catch (error) {
            console.log("🚀 ~ file: navbar.component.jsx:15 ~ handleSignOut ~ error:", error)

        }
    }

    const handleCartDropdown = () => {
        console.log("dropdown triggered")
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div>
            <div className="nav__container">
                <div className="logo__container">
                    <Link to={"/"}>
                        <LogoIcon />
                    </Link>
                </div>
                <div className="nav__links__container">
                    <Link className="nav__link" to={"/shop"}>
                        Shop
                    </Link>
                    {currentUser ? (<span onClick={handleSignOut} className="nav__link">logout</span>) : (<Link className="nav__link" to={"/auth"}>
                        login
                    </Link>)}
                    <span onClick={() => handleCartDropdown()}>
                        <CartIcon />
                    </span>
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar 