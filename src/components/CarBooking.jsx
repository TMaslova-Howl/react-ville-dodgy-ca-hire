import {useState} from 'react'
import Vehicles from "../factory/VehicleInventory.js";
import VehicleSelection from "./VehicleSelection.jsx";

const CarBooking = () => {
    const [vehicles, setVehicles] = useState(Vehicles);
    const [bookings, setBookings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(bookings);
    const calculateTotalPrice = (allSelectedVehicles) => {
        const priceArray = allSelectedVehicles
            .map((vehicle) => vehicle.category.price);

        const totalPrice = priceArray.length > 0 ? priceArray.reduce((previous, acctual) => previous + acctual) : 0;
        setTotalPrice(totalPrice);
    }
    return (
        <>
            <p>Reliable zombie proof vehicles!</p>
            <VehicleSelection vehicles={vehicles} bookings={bookings} setBookings={setBookings}
                              calculateTotal={calculateTotalPrice}/>
            <div className="totals">
                <h2>Total Price: £{totalPrice.toFixed(2)}</h2>
            </div>
        </>
    );
}

export default CarBooking;