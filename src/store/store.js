import { configureStore } from "@reduxjs/toolkit";
import { candidatesSlice, rolesSlice } from "./candidatesSlice";

export default configureStore({
    reducer: {
        candidates: candidatesSlice.reducer,
        roles: rolesSlice.reducer
    }
})