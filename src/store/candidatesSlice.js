import { createSlice } from "@reduxjs/toolkit";

export const candidatesSlice = createSlice({
    name: "candidates",
    initialState:{
        candidatesList: [],
    },
    reducers:{
        addCandidate: (state, action) => {
            state.candidatesList = [...state.candidatesList, action.payload]
        }
    }
})

export const rolesSlice = createSlice({
    name: "roles",
    initialState:{
        candidates: [],
    },
    reducers:{}
})

export const { addCandidate } = candidatesSlice.actions;