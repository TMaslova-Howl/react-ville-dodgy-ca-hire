import { useState } from 'react'
import Vehicles from "../factory/VehicleInventory.js";
import VehicleSelection from "./VehicleSelection.jsx";
const CarBooking = () => {
    const [vehicles, setVehicles] = useState(Vehicles)
    return (
        <VehicleSelection vehicles={vehicles} setVehicles={setVehicles}/>
    )
}

export default CarBooking;