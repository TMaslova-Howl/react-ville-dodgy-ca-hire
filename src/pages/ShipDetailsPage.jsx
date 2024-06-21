import {useNavigate, useParams} from "react-router-dom";
import {fetchVehicles} from "../services/vehicleService.js";
import {useEffect, useState} from "react";

const ShipDetails = () => {
    const navigate = useNavigate();
    const {name} = useParams();
    const [vehicle, setVehicle] = useState();
    useEffect(() => {
        const fetchStarships = async () => {
            const [starShip] = await fetchVehicles(name);
            console.log(starShip);
            setVehicle(starShip);
            console.log(vehicle);
        };
        fetchStarships();
    }, [name]);
    const hanldleOnclick = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <>
            <h1>Details of {name}</h1>
            <div>Cargo capacity: {vehicle?.cargo_capacity} </div>
            <div>Number of passengers: {vehicle?.passengers}</div>
            <div>Vehicle consumables: {vehicle?.consumables}</div>
            <div>
                <button type="button" onClick={hanldleOnclick}>OK</button>
            </div>
        </>
    );

}
export default ShipDetails;