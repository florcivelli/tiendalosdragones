let nombre = prompt('¡Hola! ¿Cuál es tu nombre?')
let edad = +prompt('¿Edad?')

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);


if (edad < 18) {
   alert('Debe ser mayor de edad')   
} else {
    alert('Bienvenido/a ' + nombre)
}


const recargo3 = 1.2; // 20%
const recargo6 = 1.4; // 40%
const recargo12 = 1.6; // 60%

let cantidadDinero = prompt("Digite la cantidad de dinero.")
let cantidadCuotas = prompt("Digite la cantidad cuotas. (3, 6 o 12 cuotas)")

// --------------------Funciones--------------------------

if (cantidadCuotas == 3) {
   let total = cantidadDinero*recargo3;
   let valorCuota = total/cantidadCuotas;
   console.log("total", total);
   console.log("valor cuota", valorCuota);
} else if (cantidadCuotas == 6) {
    let total = cantidadDinero*recargo6;
    let valorCuota = total/cantidadCuotas;
    console.log("total", total);
    console.log("valor cuota", valorCuota);
} else if (cantidadCuotas == 12) {
    let total = cantidadDinero*recargo12;
    let valorCuota = total/cantidadCuotas;
    console.log("total", total);
    console.log("valor cuota", valorCuota);
} else {
    console.log("No ingresó valor correcto")
} 

