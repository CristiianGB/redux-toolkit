//almacen central en el que vamos a tener todos los valores que vamos a modificar y leer

import { configureStore } from "@reduxjs/toolkit"; 
import { origenSlice, otroSlice } from "./misSlice"; //necesito utilizar la funcion de mi slice para modificar el estado
// slice = una porción de nuestro estado
export default configureStore({
    reducer: {
        //aqui ponemos todos los valores que vayamos a tener y darle un nombre a cada porción (slice) de nuestro estado
        unValor: origenSlice.reducer, // valor de mi store que pondremos en el otro fichero (misSlice.js) y se va a encargar de recibir los valores y modificarlos
        otroValor: otroSlice.reducer // otro valor de mi store que apunta a otro slice
    }
})