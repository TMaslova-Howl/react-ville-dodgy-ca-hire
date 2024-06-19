import VehicleRow from "./VehicleRow.jsx";

const VehicleSelection = ({vehicles, bookings, setBookings, calculateTotal}) => {
    let selectedCars = [];
    const removeCar = (car) => {
        selectedCars = bookings.filter(booking => booking != car);
        setBookings(selectedCars);
    }
    const addCar = (car) => {
        console.log("add car called");
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
                <th>Make</th>
                <th>Model</th>
                <th>Category</th>
                <th>Price</th>
                <th>Select</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((car, key) => {
                return (
                    <tr key={key}>
                        <VehicleRow vehicle={car} onCheck={processSelect} index={key}/>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default VehicleSelection;