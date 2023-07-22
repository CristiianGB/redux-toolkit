import React from "react";
import { useSelector } from "react-redux";

const Worker = ({ worker, index, onChangeRole, onDeleteWorker }) => {
    const rolesList = useSelector(state => state.roles.rolesList)

    return (
        <>
            <div className="column">
                <div className="photoWorker">
                    <img src={worker.picture.large} alt="worker picture" />
                </div>
                <div className="nameWorker">
                    <strong>
                        {worker.name.last}, {worker.name.first}
                    </strong>
                </div>
                <div className="locationWorker">{worker.location.city}</div>
                <div className="countryWorker">({worker.location.country})</div>
                <div className="role">
                    <select onChange={(e) => onChangeRole(e.target.value, index)}>
                        <option>Selecciona:</option>
                        {rolesList.map((role, index) =>
                            worker.role === role 
                            ? <option selected key={index}>{role}</option>
                            : <option key={index}>{role}</option>
                        )}
                    </select>
                </div>
                <div><button className="hide" onClick={()=>onDeleteWorker(worker)}>Eliminar</button></div>
            </div>

        </>
    )
}

export default Worker;