// Ordenamiento de código
// IMPORTACIÓN DE MÓDULOS.
// DECLARACIÓN DE VARIABLES.
// DECLARACIÓN DE FUNCIONES.
// EJECUCIÓN DE CÓDIGO.

//////////////////////////////////////////
/// MODULOS (IMPORT/EXPORT). Video 33 ///
/////////////////////////////////////////

// Para importar un modulo desde otro archivo(constantes.js) 
// import {PI} from "./constantes.js";
// console.log(PI);

// Para importar un modulo desde otro archivo(aritmetica.js) 

// import {sumar} from "./aritmetica.js";
// console.log(sumar(5, 3));

// import { restar } from "./aritmetica.js";
// console.log(restar(5, 3));

//IMPORTANDO UN OBJETO

// import {aritmetica} from "./aritmetica.js";
// console.log(aritmetica.sumar(5, 3));

// Si quieres que una funcion o un objeto se ejecuten por defecto

// Al haberla definido como default en la exportacion, no es necesario llamarla con import



import saludar,{} from "./constantes.js";

saludar();

