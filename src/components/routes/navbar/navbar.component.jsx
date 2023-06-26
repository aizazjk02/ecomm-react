import { Outlet, Link } from "react-router-dom"
import { useContext, useEffect } from "react"
// import { UserContext } from "../../../context/user.context"
import { ReactComponent as LogoIcon } from "../../../assets/crown.svg"
import "./navbar.styles.scss"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../../context/cart.context"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"

const Navbar = () => {
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    // console.log(currentUser.uid)
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

    
    useEffect(() => {
        
    
        // console.log(result)
        
    }, [currentUser])
    
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
                    {currentUser ? (
                        <p>
                            <Link to={"/orders"}>Orders</Link>
                            <span onClick={handleSignOut} className="nav__link">logout</span>
                        </p>
                            ) :
                        
                        (
                            <Link className="nav__link" to={"/auth"}>
                            login
                            </Link>
                            
                        )}
                            
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