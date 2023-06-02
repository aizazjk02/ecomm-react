import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import "./payment-form.styles.scss"
const PaymentForm = () => {
    return (
        <div className="payment__form__container">
            <div className="form__container">
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={"inverted"}>Pay Now</Button>
            </div>
        </div>
    )
}

export default PaymentForm