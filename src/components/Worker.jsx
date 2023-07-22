import React from "react";

const Worker = ({worker, index}) => {
    return (
        <>
        <div className="column">
            <div className="photoWorker">
                <img src={worker.picture.large} alt="worker picture" />
            </div>
            <div className="nameWorker">
                <strong>{worker.name.last}, {worker.name.first}</strong>
            </div>
            <div className="locationWorker">{worker.location.city}</div>
            <div className="countryWorker">({worker.location.country})</div>
        </div>
        </>
    )
}

export default Worker;