import "./authentication.styles.scss"
import SignUpForm from "../../sign-up-form/sign-up-form.component"
import SignInForm from "../../sign-in-form/sign-in-form.component"
// import { useNavigate } from "react-router-dom"
import { useContext} from "react"
import { UserContext } from "../../../context/user.context"
const Authentication = () => {
    // const naviagte = useNavigate()
    const { currentUser } = useContext(UserContext)
    // if (currentUser) naviagte("/")
    return (
        <div>
            {currentUser ? (<span>User already logged in!</span>) : (<div className="auth__container">
                <SignInForm />
                <SignUpForm />
            </div>)}
        </div>
        
    )
}

export default Authentication