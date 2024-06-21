import {useLocation, useNavigate} from "react-router-dom";

const CompletedOrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    console.log(state);
    const name = state.userName;
    const onClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("bookings");
        navigate("/");
    }
    return (
        <>
            <h1>Order has been placed!</h1>
            <div>
                <p>Dearest {name},</p>
                <p> thank you for booking with our very safe and honest booking!</p>
                <p>Your order has been placed and will be with you shortly.</p>
            </div>
            <div>
                <i>Please note if you or your crew have been eaten by zombies while operating our ships,
                    we do not take any responsibility</i>
            </div>
            <div>
                <button onClick={onClick} type="button">Book more ships</button>
            </div>
        </>
    )

}
export default CompletedOrderPage;