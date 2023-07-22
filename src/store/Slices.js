import { createSlice } from "@reduxjs/toolkit";

export const candidatesSlice = createSlice({
    name: "candidates",
    initialState:{
        candidatesList: [],
    },
    reducers:{
        addCandidate: (state, action) => {
            state.candidatesList = [...state.candidatesList, action.payload]
        },
        updateCandidate: (state, action) => {
            const {index, newRole} = action.payload;
            state.candidatesList[index].role = newRole
        }, 
        deleteCandidate: (state, action) => {
            const { name, lastName, email } = action.payload;
            state.candidatesList = state.candidatesList.filter(candidate=>
                candidate.name.first!==name &&
                candidate.name.last!==lastName &&
                candidate.email!==email
                )
        }
    
    }
})

export const rolesSlice = createSlice({
    name: "roles",
    initialState:{
        rolesList: ["África (Ventas)", "América (Organización)", "América (Comercial)", "Asia (Desarrollo)", "Europa (Comercial)", "Europa (Desarrollo)", "Europa (Ventas)", "Oceanía (Producción)", "Oceanía (Desarrollo)", "Antártida (Ver los osos)"],
    },
    reducers:{}
})

export const { addCandidate } = candidatesSlice.actions;
export const { updateCandidate } = candidatesSlice.actions;
export const { deleteCandidate } = candidatesSlice.actions;