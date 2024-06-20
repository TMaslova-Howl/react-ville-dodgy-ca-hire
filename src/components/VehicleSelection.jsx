import VehicleRow from "./VehicleRow.jsx";

const VehicleSelection = ({vehicles, bookings, setBookings, calculateTotal}) => {
    let selectedCars = [];
    const removeCar = (ship) => {
        selectedCars = bookings.filter(booking => booking != ship);
        setBookings(selectedCars);
    }
    const addCar = (car) => {
        selectedCars = [...bookings, car];
        setBookings(selectedCars);
    }

    const processSelect = (event) => {
        console.log(event.target);
        const key = event.target.name;
        const checked = event.target.checked;
        console.log(checked);
        const selectedCar = vehicles[key];
        checked ? addCar(selectedCar) : removeCar(selectedCar);
        console.log(selectedCar);
        calculateTotal(selectedCars);
    }
    return (
        <table className="vehicles">
            <thead>
            <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Cost</th>
                <th>Select your ride</th>
            </tr>
            </thead>
            <tbody>
            {vehicles
                .map((starShip, key) => {
                return (
                    <tr key={key}>
                        <VehicleRow vehicle={starShip} onCheck={processSelect} index={key}/>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default VehicleSelection;