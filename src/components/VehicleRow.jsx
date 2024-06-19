
const VehicleRow = ({vehicle, onCheck, index})=>{
    return (
      <>
          <td>{vehicle.make}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.category.name}</td>
          <td>£{vehicle.category.price}</td>
          <td className="checkbox-wrapper-5">
              <div className="check">
                  <input type="checkbox" id={index} onClick={onCheck}/>
                  <label htmlFor={index}></label>
              </div>
          </td>
      </>
    );
}
export default VehicleRow;
