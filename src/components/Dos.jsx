import React from "react";
import { useSelector } from "react-redux";

const Dos = () => {
    const miNombreAhora = useSelector(state=>state.unValor.miNombre) //leemos el nombre del slice para comprobar como lo hace
    const miArrayAhora = useSelector(state => state.unValor.bibliotecas) //recogemos nuestro array "bibliotecas" del origenSlice
    
    return (
        <>
        <h1>{miNombreAhora}</h1>
        {miArrayAhora.map((valor, index)=>
            <div key={index}>{valor.nombre} ({valor.inicio})</div>)}
        </>
    )
}

export default Dos