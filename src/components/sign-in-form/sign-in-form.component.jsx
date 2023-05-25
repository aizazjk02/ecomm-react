import { useState } from "react"
import { createUserDocFromAuth, signInAuthUserWithEmailAndPassword, signInWithGoogleAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import "./sign-in-form.styles.scss"

// Default formfields 
const initialFormFields = {

    "email": "",
    "password": "",

}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(initialFormFields)
    const { email, password } = formFields
    const handleOnChange = (e) => {
        const { id, value } = e.target
        setFormFields({ ...formFields, [id]: value })

    }

    const handleSubmit = async () => {
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            console.log("🚀 ~ file: sign-in-form.component.jsx:27 ~ handleSubmit ~ user:", user)
            // setCurrentUser(user)

        } catch (error) {
            console.log("🚀 ~ file: sign-in-form.component.jsx:31 ~ handleSubmit ~ error:", error)

        }


    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGoogleAuth()
        console.log("🚀 ~ file: sign-in.component.jsx:5 ~ signInWithGoogle ~ userAuth:", user)
        await createUserDocFromAuth(user)
    }
    return (
        <div className="sign-up-form__container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={e => e.preventDefault()}>


                <FormInput label={"Email"}
                    inputOptions={{
                        type: "email",
                        id: "email",
                        value: email,
                        onChange: handleOnChange,
                        required: true
                    }}
                />

                <FormInput label={"Password"}
                    inputOptions={{
                        type: "password",
                        id: "password",
                        value: password,
                        onChange: handleOnChange,
                        required: true

                    }}
                />

                <div className="buttons__container">
                    <Button onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType={"google"} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm