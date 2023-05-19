import { useState } from "react"
import { createUserDocWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
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
        const {id, value} = e.target
        setFormFields({ ...formFields, [id]: value })
       
    }

    const handleSubmit = async () => {
        console.log("Handle submit")
        /*
            TODO : Add Validation code for empty fields 
            !issue : userCreationFunction is triggering on empty fields. 
        */
        // if(! Object.values(formFields).forEach(item => {
        //     if(item.length === 0) return false
        // })) return 
        if (password !== confirmPassword) {
            alert("Your password and confirmation password do not match.");
            return false
        }
            try {
                createUserDocWithEmailAndPassword(formFields)
                
            } catch (error) {
                console.log(error.message)
            }
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" id="displayName" value={displayName} onChange={handleOnChange}  required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={handleOnChange} required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handleOnChange} required/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleOnChange} required/>
            </div>
            <button onClick={handleSubmit}>Sign up</button>
        </form>
    )
}

export default SignUpForm