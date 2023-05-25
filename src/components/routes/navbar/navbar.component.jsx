import { Outlet, Link} from "react-router-dom"
import { ReactComponent as LogoIcon } from "../../../assets/crown.svg"
import "./navbar.styles.scss"
const Navbar = () => {
    return (
        <div>
            <div className="nav__container">
                <div className="logo__container">
                    <Link to={"/"}>
                        <LogoIcon/>
                    </Link>
                </div>
                <div className="nav__links__container">
                    <Link className="nav__link" to={"/shop"}>
                        Shop
                    </Link>
                    <Link className="nav__link" to={"/auth"}>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar 