import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarMiNombre, incrementarPuntuacion, modificarUnValor, agregarUnValor, eliminarUnValor } from "../store/misSlice"; //importo acciones (reducers) de los slice para utilizarlos

const Uno = () => {
    //useSelector se utiliza para la lectura de los valores almacenados en la store
    //useDispatch envia la informacion a un reducer se encarga de realizar las acciones de cada slice
    
    const dispatch = useDispatch(); //accedo al estado.el slice que quiero.la propiedad a la que accedo del estado  
    const miNombreAhora = useSelector(state=>state.unValor.miNombre); //al entrar en este componente useSelector irá al store, lo seleccionará y lo leerá
    const miPuntuacionAhora = useSelector(state=>state.otroValor.puntuacion);
    const modificar=()=>{
        //dispatch(indico la funcion que quiero utilizar(y añado el valor al que quiero actualizarlo))
        dispatch(guardarMiNombre("Bob Esponja")) //envia la informacion a guardarMiNombre almacenado en origenSlice (misSlice.js) para que ejecute la acción
    }

    const incrementar = () => { 
        dispatch(incrementarPuntuacion()) //apunta al otro slice, utiliza su funcion y no requiere parametro porque la accion incrementa en uno el valor "puntuacion" del slice
    }

    const modificarArray = () => {
        dispatch(modificarUnValor( //tenemos que enviar 3 parametros indice, nombre y inicio por lo que creamos un objeto para poder empaquetarlo
            {
                indice:0, //refiere a la posicion del elemento que vamos a modificar ( podría ser variable, lo creamos estático para probar)
                nuevoNombre: "React",  //nuevo nombre que vamos a ponerle al valor en la posicion 0
                nuevoInicio: "Mayo de 2013" // nuevo inicio que vamos a ponerle al valor en la posicion 0
            }))
    }

    const agregar = () =>{
        dispatch(agregarUnValor(
            {
                nuevoNombre: "Vue",
                nuevoInicio: 2014
            }))
    }

    const eliminar = () => {
        dispatch(eliminarUnValor("Vue"))
    }

    return (
        <>
        <h1>{miNombreAhora}</h1>
        <h1>{miPuntuacionAhora}</h1>
        {/* para modificar el valor de "miNombre" del initialState de "origenSlice" */}
        <button onClick={modificar}>Modificar miNombre</button> 
        {/* modifica "miNombre" del origenSlice por un valor estático */}
        <button onClick={incrementar}>Incrementar Puntuación</button>
        {/* incrementa la puntuación en 1 del otroSlice */}
        <button onClick={modificarArray}>Modificar un valor</button>
        {/* modifica el valor del array "bibliotecas" del origenSlice  */}
        <button onClick={agregar}>Agregar un valor</button>
        {/* añade un valor estático al array "bibliotecas" */}
        <button onClick={eliminar}>Eliminar un valor</button>
        {/* elimina el valor estático añadido al array "bibliotecas" */}
        </>
    )
}

export default Uno