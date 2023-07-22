//slice que nos va a permitir acceder a los valores (datos)
//mis "porciones" del estado

import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({ //función que se va a encargar de modificar el valor llamado "unValor" del store.js
    name: "unValor", // un nombre que identifica el slice
    initialState: {miNombre: "Cristian", edad:26 ,  //estado inicial del slice ( puedo añadir los datos que quiera y modificarlos con mis reducers)
    bibliotecas: [ //array de dos objetos para probar cosas con redux
        {nombre: "react", inicio:2013}, // teniendo en cuenta el dato hay que enviar mas parametros para que la acción lo modifique
        {nombre:"redux", inicio:2015}
    ], 
    },
    reducers: { // funciones que modifican los valores del slice
        guardarMiNombre: (state, action) => { //recoge dos parametros el estado AHORA MISMO y la acción ( que nos llegará desde donde lo modificamos)
            state.miNombre = action.payload; //coge el estado y lo actualiza al payload ( lo que recibe ) de la acción
        },
        modificarUnValor: (state, action) => { //utilizo la destructuración para obtener los parametros del payload
            const {indice, nuevoNombre, nuevoInicio} = action.payload; //conseguimos nuestros parametros deconstruyendo el payload que me trae la accion
            state.bibliotecas[indice].nombre = nuevoNombre; // le decimos que de nuestro estado inicial actualice la posicion que le trae los parametros (payload destructurado) con la informacion que le trae el payload
            state.bibliotecas[indice].inicio = nuevoInicio;
        }, 
        agregarUnValor: (state, action) => {
            const {nuevoNombre, nuevoInicio} = action.payload;
            state.bibliotecas = [...state.bibliotecas, 
                {nombre: nuevoNombre, inicio:nuevoInicio} ]
        }, 
        eliminarUnValor: (state, action) => {
            state.bibliotecas = state.bibliotecas.filter(valor => valor.nombre != action.payload)
        }
    }
})


export const otroSlice = createSlice({
    name: "otroValor",
    initialState: {puntuacion:0},
    reducers: {
        incrementarPuntuacion: (state, action) => {
            state.puntuacion = state.puntuacion + 1
        }
    }
})


export const {guardarMiNombre} = origenSlice.actions; //devuelve (export) la funcion encargada de la accion que tiene que realizar
export const {modificarUnValor} = origenSlice.actions;
export const {agregarUnValor} = origenSlice.actions;
export const {eliminarUnValor} = origenSlice.actions;
export const {incrementarPuntuacion} = otroSlice.actions;
