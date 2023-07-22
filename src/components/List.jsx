import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import { useDispatch, useSelector } from "react-redux";
import { addCandidate } from "../store/candidatesSlice";
import { Link } from "react-router-dom";

const List = () => {
    const [candidates, setCandidates] = useState([]);
    const dispatch = useDispatch()
    const candidateList = useSelector(state=>state.candidates.candidatesList)

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=6")
        .then(response => response.json())
        .then(data => setCandidates(data.results))
    },[])

    const fetchOne = (index) =>{
        fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then((data) => {
            const aux = [...candidates]
            aux[index]={...data.results[0]}
            setCandidates(aux)
        })
    }

    const saveOne = (candidate) => {
        dispatch(addCandidate(candidate))
    }

    return(
        <>
        <main className="main">
            {candidates.map((candidate, index)=>
            <Candidate candidate={candidate} index={index} onSaveOne={saveOne} onFetchOne={fetchOne}/>
            )}
        </main>
        <hr />
        <div className="candidates">
            {candidateList.map((candidate, index)=>
            <Link key={index} to="/contracted"><button >{candidate.name.first}</button></Link>
            )}
        </div>
        </>
    )
}
export default List;