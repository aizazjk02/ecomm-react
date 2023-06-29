// import FormInput from "../form-input/form-input.component"
import { useEffect, useState } from "react"
import Button from "../button/button.component"
import "./shipping-address.styles.scss"
// import { useContext } from "react"
// import { CartContext } from "../../context/cart.context"
// import { UserContext } from "../../context/user.context"
import { addOrder } from "../../utils/firebase/firebase.utils"
import PassMarkIcon from "../../assets/pass_tick.png"
import CrossFailIcon from "../../assets/fail_cross.png"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selectors"
import { clearCart } from "../../store/cart/cart.reducer"
const initialFormFields = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    phoneNumber: "",
    paymentMethod: ""
}

const ShippingAddress = ({ setCheckout }) => {
    // const { currentUser } = useContext(UserContext)
    const [formErrors, setFormErrors] = useState({})
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    // const {cartItems, cartTotal, clearCart} = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const [formFields, setFormFields] = useState(initialFormFields)
    const { firstName, lastName, address, city, state, pinCode, phoneNumber, paymentMethod } = formFields
    const [orderStatus, setOrderStatus] = useState(false)
    const handleOrder = async (e) => {
        e.preventDefault()
        if (Object.keys(formErrors).length > 0) return 
        else {

            await addOrder(formFields, currentUser.uid, cartItems, cartTotal).then(result => {
                setOrderStatus(result)
                
                if (result) dispatch(clearCart([]))
            })
        }
    }

    const handleOnChange = (e) => {
        const { id, value } = e.target
        setFormFields({ ...formFields, [id]: value })
    }

    const validateForm = () => {
        const errors = {}
        if (firstName === "") errors.firstName = "First name is required."
        if (lastName === "") errors.lastName = "Last name is required."
        if (city === "") errors.city = "City is required."
        if (address === "") errors.address = "Address is required."
        if (state === "") errors.state = "State is required."
        if (pinCode === "") errors.pinCode = "Pincode is required."
        else if (pinCode.length > 6) errors.pinCode = "Pincode should be less than 6 digits."
        if (phoneNumber === "") errors.phoneNumber = "Phone number is required."
        else if (phoneNumber.length > 10 || phoneNumber.length < 10) errors.phoneNumber = "Phone number should be 10 digits"
        if (paymentMethod !== "Cash") errors.paymentMethod = "Please select payment method."
        return errors
    }
    // console.log(formFields)
    useEffect(() => {
        setFormErrors(validateForm())
    }, [formFields])
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

                            <span className="error">{formErrors.firstName}</span>
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="lastName">Last Name</label>


                            <input type="text" id="lastName" onChange={handleOnChange} value={lastName} required />

                            <span className="error">{formErrors.lastName}</span>
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="address">Address</label>

                            <input type="text" id="address" onChange={handleOnChange} value={address} required />

                            <span className="error">{formErrors.address}</span>
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="city">City</label>

                            <input type="text" id="city" onChange={handleOnChange} value={city} required />

                            <span className="error">{formErrors.city}</span>
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
                            <span className="error">{formErrors.state}</span>
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="pinCode">Pin Code</label>

                            <input type="text" id="pinCode" onChange={handleOnChange} value={pinCode} required />
                            <span className="error">{formErrors.pinCode}</span>

                        </div>
                        <div className="form__input__container">
                            <label htmlFor="phoneNumber">Phone Number</label>

                            <input type="text" id="phoneNumber" onChange={handleOnChange} value={phoneNumber} required />

                            <span className="error">{formErrors.phoneNumber}</span>
                        </div>
                        <div className="form__input__container">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select id="paymentMethod" value={paymentMethod} required onChange={handleOnChange}>
                                <option value="">Select Payment Method</option>
                                <option value="Cash">Cash On Delivery</option>
                            </select>
                            <span className="error">{formErrors.paymentMethod}</span>
                        </div>
                        <Button onClick={handleOrder}>Place Order</Button>
                    </form>
                </>
            )}

        </div>
    )
}

export default ShippingAddress