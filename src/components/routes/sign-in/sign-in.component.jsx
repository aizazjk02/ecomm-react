import { signInWithGoogleAuth, createUserDocFromAuth } from "../../../utils/firebase/firebase.utils"
import SignUpForm from "../../sign-up-form/sign-up-form.component"
const SignIn = () => {
    const handleGoogleAuth = async () => {
        const { user } = await signInWithGoogleAuth()
        console.log("🚀 ~ file: sign-in.component.jsx:5 ~ handleGoogleAuth ~ userAuth:", user)
        await createUserDocFromAuth(user)
    }
    return (
        <div>
            Sign In
            <button onClick={handleGoogleAuth}>
                Sign In Google
            </button>
            <div>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignIn