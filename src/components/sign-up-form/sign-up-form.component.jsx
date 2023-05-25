import { useState } from "react"
import { createUserAuthWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"

// Default formfields 
const initialFormFields = {
    "displayName": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(initialFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    
    const handleOnChange = (e) => {
        const { id, value } = e.target
        setFormFields({ ...formFields, [id]: value })

    }

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert("Your password and confirmation password do not match.");
            return false
        }
        try {
            const { user } = await createUserAuthWithEmailAndPassword(email, password)
            console.log("🚀 ~ file: sign-up-form.component.jsx:33 ~ handleSubmit ~ user:", user)
            await createUserDocFromAuth(user, { displayName })
            setFormFields(initialFormFields)

        } catch (error) {

            switch (error.code) {
                case "auth/weak-password":
                    alert("password should be at least 6 characters!")
                    break

                case "auth/email-already-in-use":
                    alert("Email already in use!")
                    break

                default:
                    break
            }
            console.log("Error while signing up! :", error)
        }
    }

    return (
        <div className="sign-up-form__container">
            <h2>Don't have an account?</h2>
            <span>Sign up form with email and password</span>
            <form onSubmit={e => e.preventDefault()}>

                <FormInput
                    label={"Display Name"}
                    inputOptions={{
                        type:"text",
                        id:"displayName",
                        value:displayName,
                        onChange: handleOnChange,
                        required: true,     
                    }}
                    />

                <FormInput label={"Email"}
                    inputOptions={{          
                        type:"email",
                        id:"email",
                        value:email,
                        onChange:handleOnChange,
                        required:true
                    }}
                />

                <FormInput label={"Password"}
                    inputOptions={{
                        type:"password",
                        id:"password",
                        value:password,
                        onChange:handleOnChange,
                        required:true

                    }}
                />

                <FormInput label={"Confirm Password"}
                    inputOptions={{
                        type:"password",
                        id:"confirmPassword",
                        value:confirmPassword,
                        onChange:handleOnChange,
                        required:true

                    }}
                />

                <Button onClick={handleSubmit}>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm