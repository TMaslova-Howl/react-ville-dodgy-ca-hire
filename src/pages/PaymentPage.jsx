import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {state} = location;
    const totalPrice = state.totalPrice;
    const bookingFee = 10;
    const [paymentDetails, setPaymentDetails] = useState({name: '', card: ''});
    const onChangePaymentDetails = (e) => {
        setPaymentDetails({...paymentDetails, [e.target.name]: e.target.value});
    }
    const onPaymentSubmit = (e) => {
        e.preventDefault();
        navigate("/complete", {state: {userName: paymentDetails.name}});
    }
    return (
        <>
            <h1>Payment details</h1>
            <section>
                <p>Welcome to our very secure payment system!</p>
                <p>Please enter your payment details to pay for your order</p>
                <p>Total amount due (plus very honest booking fee of £{bookingFee}) £{totalPrice + bookingFee} </p>
            </section>
            <form>
                <label htmlFor="name">Name on card</label>
                <input type="text" id="name" name="name" value={paymentDetails.name} onChange={onChangePaymentDetails}/><br/>
                <label htmlFor="card">Card number</label>
                <input type="number" id="card" name="card" value={paymentDetails.card}
                       onChange={onChangePaymentDetails}/><br/><br/>
                <button type="submit" onClick={onPaymentSubmit}>Pay</button>
            </form>
        </>
    )
}
export default PaymentPage;