//////////////////////////////////////////
/// MODULOS (IMPORT/EXPORT). Video 33 ///
/////////////////////////////////////////

export function sumar(a,b){
  return a + b;

}

export function restar(a, b) {
  return a - b;
}

// Tambien podemos agrupar las funciones y crear un objeto

export const aritmetica = {
    sumar,
    restar
//Cuando el valor y la propiedad en los objetos literales se llaman igual no es necesario usar sumar: sumar
};