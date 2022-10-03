//Punto 1
// let edad = parseInt(prompt("Ingrese su edad: "));
// if(edad >= 18){
//     alert("puede conducir");
// }
// else{
//     alert("no puede conducir");
// }

//Punto 2

// let nota = parseInt(prompt("Ingrese la nota: "));

// if(nota >= 0 && nota <= 3){
//     alert("Muy deficiente");
// }
// else if(nota > 3 && nota < 6){
//     alert("Suficiente");
// }
// else if(nota >= 6 && nota < 8){
//     alert("Bien");
// }
// else if(nota >= 8 && nota < 10){
//     alert("Notable");
// }
// else if(nota == 10){
//     alert("Sobresaliente");
// }

//Punto 3

// let newArray = [];
// let mensaje = new Array();
// let opcion;
// do{
//     opcion = confirm(mensaje.push(prompt("Ingrese lo que desee: ")));
// }while(opcion == true)

// for(let i = 0; i < mensaje.length; i++){
//     newArray.push(mensaje[i]);
// }
// console.log(newArray.join("-"));

//Punto 4

// let total = 0;
// let num;
// let aceptar;
// do{
//     num = parseInt(prompt("Ingrese un num: "));
//     if(Number.isInteger(num)==true){
//         total = total + num;
//         aceptar = confirm("Desea seguir ingresando numeros?");
//     }
//     else{
//         alert("No es un numero");
//     }
// }while(aceptar == true)

// alert(total);

//Punto 5

let nombre;
let edad;
let Personas = new Array();
let Edades = new Array();
let max = 0;
let min = max;

for (let i = 0; i < 3; i++) {
    nombre = prompt("Ingrese su nombre");
    edad = parseInt(prompt("Ingrese su edad"));
    Personas.push(nombre);
    Edades.push(edad);
}

Edades.forEach(e => {
    if(e > max){
        max = e;
    }
    else{
        e = min;
    }
});

for (let j = 0; j < Edades.length; j++) {
    if(Edades[j] == max){
        console.log(Personas[j] + " es el mas grande");
    }
}
