import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Worker from "./Worker";
import { Link } from "react-router-dom";
import { deleteCandidate, updateCandidate } from "../store/Slices";

const Contracted = () => {
    const dispatch = useDispatch()
    const contractedList = useSelector(state=>state.candidates.candidatesList)
    
    const changeRole = (role, index) => {
        dispatch(updateCandidate({
            index: index,
            newRole: role
        }))
    }

    const deleteWorker =(worker)=>{
        dispatch(deleteCandidate({
           name: worker.name.first,
           lastName: worker.name.last,
           email: worker.email
        }))
    }

    return ( 
        <div>
            <h1>Trabajadores</h1>
            <Link to="/list"><button>Lista de Candidatos</button></Link>
            <div className="workers">
                {contractedList.map((worker, index)=>
                <Worker worker={worker} onDeleteWorker={deleteWorker} onChangeRole={changeRole} index={index}/>
                )}
            </div>
        </div>
    )
}

export default Contracted;