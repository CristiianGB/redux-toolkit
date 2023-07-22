import React from "react";

const Candidate = ({candidate, onFetchOne, index, onSaveOne}) => {
    return ( 
        <>
            <div className="candidate">
                <div className="photo">
                    <img src={candidate.picture.large} alt="candidate image" />
                </div>
            
            <div className="data">
                <div className="name">{candidate.name.title}. {candidate.name.first} {candidate.name.last}</div>
                <div className="location">Ubicación: {candidate.location.city} ({candidate.location.country})</div>
                <div className="email"><a href="#">{candidate.email}</a></div>
                <div className="phone">{candidate.phone}</div>
            </div>
            <div className="buttons">
                <button className="hide" onClick={()=>onFetchOne(index)}>Ocultar</button>
                <button className="save" onClick={()=>onSaveOne(candidate, index)}>Guardar</button>
            </div>
            </div>
           
        </>
    )
}

export default Candidate;