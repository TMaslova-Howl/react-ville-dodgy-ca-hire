
const VehicleRow = ({vehicle, onCheck, index})=>{
    return (
      <>
          <td>{vehicle.name}</td>
          <td>{vehicle.model}</td>
          <td>£{vehicle.cost_in_credits}</td>
          <td className="checkbox-wrapper-5">
              <div className="check">
                  <input type="checkbox" id={index} name={index} onClick={onCheck}/>
                  <label htmlFor={index}></label>
              </div>
          </td>
      </>
    );
}
export default VehicleRow;
