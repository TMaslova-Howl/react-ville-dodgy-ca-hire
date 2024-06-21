import {Link} from 'react-router-dom';

const VehicleRow = ({vehicle, onCheck, index, isChecked}) => {

    return (
      <>
          <td><Link to={`shipDetails/${vehicle.name}`}>{vehicle.name}</Link></td>
          <td>{vehicle.model}</td>
          <td>£{vehicle.cost_in_credits}</td>
          <td className="checkbox-wrapper-5">
              <div className="check">
                  <input type="checkbox" id={index} name={index} defaultChecked={isChecked} onClick={onCheck}/>
                  <label htmlFor={index}></label>
              </div>
          </td>
      </>
    );
}
export default VehicleRow;
