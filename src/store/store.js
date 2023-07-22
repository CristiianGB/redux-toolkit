import { configureStore } from "@reduxjs/toolkit";
import { candidatesSlice, rolesSlice } from "./Slices";

export default configureStore({
    reducer: {
        candidates: candidatesSlice.reducer,
        roles: rolesSlice.reducer
    }
})