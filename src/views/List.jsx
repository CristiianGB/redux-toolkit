import React, { useEffect } from "react";
import Candidate from "../components/Candidate";
import { useDispatch, useSelector } from "react-redux";
import { addCandidate, initialCandidates } from "../store/Slices";
import { Link } from "react-router-dom";
import { getInitialCandidates, getInitialCandidatesThunk, getOneCandidate } from "../service";

const List = () => {
    const dispatch = useDispatch()
   
    const initialCandidates = async () => {
        dispatch(getInitialCandidatesThunk())
    }

   
    useEffect(()=>{
        initialCandidates()
    
    },[])

 const candidateList = useSelector(state=>state.candidates.candidateList)
 console.log(candidateList)
 
    const fetchOne = async (index) =>{
        const uniqueCandidate = await getOneCandidate()
        const aux = [...candidateList]
            aux[index]={...uniqueCandidate}
            // setCandidates(aux)
    }

    const saveOne = (candidate, index) => {
        const newCandidate = {...candidate, role:""}
        dispatch(addCandidate(newCandidate))
        fetchOne(index)
    }

    return(
        <>
        <h1>Candidatos:</h1>
        <Link to="/contracted"><button>Trabajadores</button></Link>
        <main className="main">
            {candidateList.map((candidate, index)=>
            <Candidate key={index} candidate={candidate} index={index} onSaveOne={saveOne} onFetchOne={fetchOne}/>
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