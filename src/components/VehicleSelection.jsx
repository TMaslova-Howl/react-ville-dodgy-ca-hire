import VehicleRow from "./VehicleRow.jsx";

const VehicleSelection = ({vehicles, setVehicles}) => {
    console.log(vehicles);
    const processSelect = (event) => {
        console.log(event.target);
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