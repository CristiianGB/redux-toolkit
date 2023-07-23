import React from "react";
import { Route, Routes } from "react-router";
import List from "../views/List";
import Contracted from "../views/Contracted";

const MiRouter = () => {
    return ( 
        <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/candidates" element={<List />} />
            <Route path="/contracted" element={<Contracted />} />
            <Route path="*" element={<List />} />
        </Routes>
    )
}

export default MiRouter