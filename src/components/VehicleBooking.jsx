import {useEffect, useState} from 'react'
import VehicleSelection from "./VehicleSelection.jsx";
import {fetchVehicles} from "../services/vehicleService.js";
import {useNavigate} from "react-router-dom";

const VehicleBooking = () => {
    const [starShips, setStarShips] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBookings = localStorage.getItem("bookings");
        const fetchStarships = async () => {
            const vehicles = await fetchVehicles();
            setStarShips(vehicles);
        };
        fetchStarships();
        if (storedBookings !== null) {
            const jsonBookings = JSON.parse(storedBookings);
            calculateTotalPrice(jsonBookings);
            console.log({jsonBookings})
            setBookings(jsonBookings);
        }
    }, []);

    const calculateTotalPrice = (allSelectedVehicles) => {
        const priceArray = allSelectedVehicles
            .map((vehicle) => Number(vehicle.cost_in_credits));

        const totalPrice = priceArray.length > 0 ? priceArray.reduce((previous, acctual) => Number(previous) + Number(acctual)) : 0;
        setTotalPrice(totalPrice);
    }
    const handleOnclick = (e) => {
        e.preventDefault();
        navigate("/confirmation", {state: {bookings: bookings, totalPrice: totalPrice}});
    }
    return (
        <>
            <p>Reliable zombie proof vehicles exported from the galaxy far far away!</p>
            <VehicleSelection vehicles={starShips} bookings={bookings} setBookings={setBookings}
                              calculateTotal={calculateTotalPrice}/>
            <div className="totals">
                <h2>Total Price: £{totalPrice}</h2>
            </div>
            <button type="button" onClick={handleOnclick}>Next</button>
        </>
    );
}

export default VehicleBooking;