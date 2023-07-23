import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getInitialCandidatesThunk = createAsyncThunk("candidates/getInitialCandidatesThunk", async () => {
const response = await fetch(`https://randomuser.me/api/?results=6`)
    const data = await response.json()
    console.log(data.results)
    return data.results
})

export const candidatesSlice = createSlice({
    name: "candidates",
    initialState:{
        candidatesList: [],
    },
    reducers:{
        initialCandidates: (state, action) => {
            console.log(action.payload)
        },
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
    }, 
    extraReducers: (builder) => {
        builder.addCase(getInitialCandidatesThunk.fulfilled, (state, action) => {
            console.log("fullfilled");
            console.log(state);
            console.log(action);
            state.candidatesList = []
          })
          
      },
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
export const { initialCandidates } = candidatesSlice.actions;
export default candidatesSlice.reducer