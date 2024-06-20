import {useEffect, useState} from 'react'
import Vehicles from "../factory/VehicleInventory.js";
import VehicleSelection from "./VehicleSelection.jsx";
import {fetchVehicles} from "../services/vehicleService.js";

const CarBooking = () => {
    const [starShips, setStarShips] = useState([]);
    const [vehicles, setVehicles] = useState(Vehicles);
    const [bookings, setBookings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchStarships = async () => {
            const data = await fetchVehicles();
            console.log('Starship data:', data); // Notice the properties of `data`
            setStarShips(data); // results is an array
        };
        fetchStarships();
    }, []);
    const calculateTotalPrice = (allSelectedVehicles) => {
        const priceArray = allSelectedVehicles
            .map((vehicle) => Number(vehicle.cost_in_credits));

        const totalPrice = priceArray.length > 0 ? priceArray.reduce((previous, acctual) => Number(previous) + Number(acctual)) : 0;
        setTotalPrice(totalPrice);
    }
    return (
        <>
            <p>Reliable zombie proof vehicles exported from the galaxy far far away!</p>
            <VehicleSelection vehicles={starShips} bookings={bookings} setBookings={setBookings}
                              calculateTotal={calculateTotalPrice}/>
            <div className="totals">
                <h2>Total Price: £{totalPrice}</h2>
            </div>
        </>
    );
}

export default CarBooking;