import VehicleRow from "./VehicleRow.jsx";

const VehicleSelection = ({vehicles, bookings, setBookings, calculateTotal}) => {
    let selectedCars = [];
    const removeCar = (ship) => {
        selectedCars = bookings.filter(booking => booking != ship);
        console.log({selectedCars});
        localStorage.setItem("bookings", JSON.stringify(selectedCars));
        setBookings(selectedCars);
    }
    const addCar = (car) => {
        selectedCars = [...bookings, car];
        localStorage.setItem("bookings", JSON.stringify(selectedCars));
        setBookings(selectedCars);
    }

    const processSelect = (event) => {
        const key = event.target.name;
        const checked = event.target.checked;
        const selectedCar = vehicles[key];
        checked ? addCar(selectedCar) : removeCar(selectedCar);
        console.log(selectedCar);
        calculateTotal(selectedCars);
    }

    const isChecked = (vehicle) => {
        console.log("bookings from selection", bookings);
        console.log({vehicle});
        const checkedBooking = bookings?.filter((booking) => booking.name == vehicle.name)
        console.log({checkedBooking});
        return checkedBooking.length > 0;

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
                        <VehicleRow vehicle={starShip} onCheck={processSelect} index={key}
                                    isChecked={isChecked(starShip)}/>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default VehicleSelection;