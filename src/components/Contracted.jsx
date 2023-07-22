import React from "react";
import { useSelector } from "react-redux";
import Worker from "./Worker";

const Contracted = () => {
    const contractedList = useSelector(state=>state.candidates.candidatesList)
    
    return ( 
        <div>
            <h1>Trabajadores</h1>
            <Link to="/list">Lista de Candidatos</Link>
            <div className="contractedCandidates">
                {contractedList.map((worker, index)=>
                <Worker worker={worker} index={index}/>
                )}
            </div>
        </div>
    )
}

export default Contracted;