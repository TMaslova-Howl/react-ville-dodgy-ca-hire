import {useLocation, useNavigate} from "react-router-dom";

const ConfirmationPage = () => {
    const location = useLocation();
    const {state} = location;
    const bookings = state.bookings;
    const totalPrice = state.totalPrice;
    const navigate = useNavigate();
    const handleBackButtonClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    const handlePaymentClick = (e) => {
        e.preventDefault();
        navigate("/payment", {state: {totalPrice: totalPrice}});
    }
    return (
        <>
            <h1>Great choice!</h1>
            <table className="vehicles">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                    <tr key={booking.name}>
                        <td>{booking.name}</td>
                        <td>£{booking.cost_in_credits}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Total price to pay {totalPrice}</h2>
            <button type="button" onClick={handleBackButtonClick}>Back</button>
            <button type="button" onClick={handlePaymentClick}>Confirm and Pay</button>
        </>
    )
}
export default ConfirmationPage;