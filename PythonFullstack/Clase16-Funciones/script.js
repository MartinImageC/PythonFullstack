function saludar() {
    console.log("Hola que pez");   
}
function despedirse(){
    console.log("chau");
}

//Invocando funciones//
saludar();
despedirse(); 

//---------------------------o--------------------------//
function Insertarnumero() {
    let numero = 3;
    return numero;
}

let valorRetornado = Insertarnumero();
console.log(valorRetornado);

//--------------------------o---------------------------//

function Multi(valor1, valor2){
    let total = valor1 * valor2;
    return total;
}

let result= Multi(2,3);
console.log(result);

let cotizacionDolar = 288;
let ahorroPesos = 500000;

function convertirAdolar(valorCot,cantPesos) {
    return cantPesos/valorCot;
}

console.log("Con esa plata tenes: " + convertirAdolar(cotizacionDolar, ahorroPesos));

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}

let numA = parseInt(prompt("Ingrese valor: "));
let numB = parseInt(prompt("Ingrese otro valor: "));

let operacion = prompt("Ingrese");

if(operacion==1){
    sumar(numA,numB);
}else if(operacion==2){
    restar(numA, numB);
}

//Variables GLobales

let variableGlobal = "Soy Global";

function variablesInternas() {
    let x = "hola"
    var y = 1;
    console.log(x);
}

console.log(variableGlobal);

//iterar en array

let arr = [1,2,3,4,5,6]
arr.forEach(e => console.log(e));