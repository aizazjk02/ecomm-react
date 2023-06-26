// import FormInput from "../form-input/form-input.component"
import { useState } from "react"
import Button from "../button/button.component"
import "./shipping-address.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
// import { UserContext } from "../../context/user.context"
import { addOrder } from "../../utils/firebase/firebase.utils"

import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
const initialFormFields = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    phoneNumber: "",
    paymentMethod:""
}

const ShippingAddress = ({setCheckout}) => {
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const {cartItems, cartTotal, clearCart} = useContext(CartContext)
    const [formFields, setFormFields] = useState(initialFormFields)
    const { firstName, lastName, address, city, state, pinCode, phoneNumber, paymentMethod } = formFields
    const [orderStatus, setOrderStatus] = useState(false)
    const handleOrder = async (e) => {
        e.preventDefault()
        await addOrder(formFields, currentUser.uid, cartItems, cartTotal).then(result => {
            if(result) clearCart()
            setOrderStatus(result)
        })
    }

    const handleOnChange = (e) => {
        const {id, value} = e.target
        setFormFields({...formFields, [id] : value})
    }
    // console.log(formFields)
    return (
        <div className="shipping__address__container">
            {orderStatus ? (<h2>Order Placed!</h2>) : (
                <>
                    <Button onClick={() => setCheckout(false)}>Go Back</Button>
                    <h1>Shipping Address :</h1>
                    <form className="shipping__address__form">
                        <div className="form__input__container">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={handleOnChange} value={firstName} required />
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={handleOnChange} value={lastName} required />
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" onChange={handleOnChange} value={address} required />
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" onChange={handleOnChange} value={city} required />
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="state">State :</label>
                            <select id="state" required onChange={handleOnChange} value={state}>
                                <option value="">Select a State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        <div className="form__input__container">
                        <label htmlFor="pinCode">Pin Code</label>
                        <input type="text" id="pinCode" onChange={handleOnChange} value={pinCode} required />
                        </div>
                        <div className="form__input__container">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" onChange={handleOnChange} value={phoneNumber} required />
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select id="paymentMethod" value={paymentMethod} required onChange={handleOnChange}>
                                <option value="">Select Payment Method</option>
                                <option value="Cash">Cash On Delivery</option>
                            </select>
                        </div>
                        <Button onClick={handleOrder}>Place Order</Button>
                    </form>
                </>
            )}
            
        </div>
    )
}

export default ShippingAddress