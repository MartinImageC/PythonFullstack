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

//let newArray = [];
//let mensaje = new Array();
//let opcion;
//do{
//    opcion = confirm(mensaje.push(prompt("Ingrese lo que desee: ")));
//}while(opcion == true)
//for(let i = 0; i < mensaje.length; i++){
//    newArray.push(mensaje[i]);
//}
//console.log(newArray.join("-"));

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

// let nombre;
// let edad;
// let Personas = new Array();
// let Edades = new Array();
// let max = 0;
// let min = max;

// for (let i = 0; i < 3; i++) {
//     nombre = prompt("Ingrese su nombre");
//     edad = parseInt(prompt("Ingrese su edad"));
//     Personas.push(nombre);
//     Edades.push(edad);
// }

// Edades.forEach(e => {
//     if(e > max){
//         max = e;
//     }
//     else{
//         e = min;
//     }
// });

// for (let j = 0; j < Edades.length; j++) {
//     if(Edades[j] == max){
//         console.log(Personas[j] + " es el mas grande");
//     }
// }

//Punto 6

//let numero = Math.floor(Math.random() * (99));
//alert(numero);

//Punto 7

//let texto = prompt("Ingrese lo que desee en minusculas: ");
//alert("Texto pasado a mayusculas: " + "\n" + texto.toUpperCase());

//Punto 8

//let oracion = prompt("Ingrese un texto: ");
//let separado = oracion.split("");
//alert(separado.join("-"));

//Punto 9

//let texto = prompt("Ingrese un texto: ");
//let arrayTexto = texto.split("");
//let vocales = "aeiou";
//var cont = 0;
//arrayTexto.forEach(e => {
//    if(vocales.includes(e)){
//        cont++;     
//    }
//})
//
//alert("El texto contiene " + cont + " vocales");

//Punto 10
//
//let oracion = prompt("Texto para pasar a la inversa: ");
//let array = oracion.split("");
//alert(array.reverse().join(""));

//Punto 11

//let numA = parseInt(prompt("Ingrese un numero: "));
//let numB = parseInt(prompt("Ingrese otro numero: "));
//let total = numA + numB;
//alert("El total seria: " + total);

//Punto 12
//
//let C = parseInt(prompt("Ingrese el valor en grados: "));
//let F = (C * 1.8) + 32;
//alert(C + "° serian " + F + " F°");

//Punto 13
//
//let num = parseInt(prompt("Ingrese un numero para dividirlo: "));
//let div = num/10;
//
//alert("El resultado es: " + div);

//Punto 14
//
//let num = parseInt(prompt("Ingrese un numero para determinar si es par: "));
//if(num %2 === 0){
//    alert("Si es par");
//}
//else{
//    alert("No es par");
//}

//Punto 15
//
//let num = parseInt(prompt("Ingrese un numero para determinar si es divisible 5: "));
//if(num %5 === 0){
//    console.log("Es divisible por 5");
//}
//else{
//    console.log("No es divisible");
//}

//Punto 16
//
//let num = parseInt(prompt("Introduzca un numero: "));
//if(num %5 === 0 && num %11 === 0){
//    console.log("es divisible por 5 y 11");
//}
//else{
//    console.log("no es divisible");
//}

//Punto 17
//
//let numeros = prompt("Ingrese dos numeros: ");
//let array = numeros.split("");
//let max = 0;
//array.forEach(e => {
//    if(parseInt(e) > max){
//        max = e;
//    }
//})
//alert("El mas grande de los dos numeros es " + max);

//Punto 18
//
//let numA = parseInt(prompt("Ingrese un numero: "));
//let numB = parseInt(prompt("Ingrese otro numero: "));
//numA > numB ? alert("El mayor de los dos es: " + numA) : alert("El mayor de los dos es: " + numB);

//Punto 19
//
//let texto = prompt("Ingrese alguna palabra");
//let array = texto.split("");
//let arrayN = ["0","1","2","3","4","5","6","7","8","9"]; 
//
//if(arrayN.includes(array[0])){
//    alert("Empieza por un numero");
//}
//else{
//    alert("Empieza por una letra o simbolo");
//}

//Punto 20
//
//let A = parseInt(prompt("Ingrese el valor del angulo A: "));
//let B = parseInt(prompt("Ingrese el valor del angulo B: "));
//let C = parseInt(prompt("Ingrese el valor del angulo C: "));
//let suma = A + B + C;
//
//if(suma > 180||suma < 180){
//    alert("Los valores son incorrectos");
//}
//else{
//    alert("El triangulo es valido");
//}

//Punto 21

//let texto = prompt("Ingrese una palabra");
//let array = texto.split("");
//
//if(array[0] === texto[0].toUpperCase()){
//    alert("Empieza en mayuscula");
//}
//else{
//    alert("No empieza en mayuscula");
//}

//Punto 22
//
//let año = parseInt(prompt("Ingrese un año: "));
//
//if(año %4 === 0 && año %100 === 0 && año %400 === 0){
//    alert("Es un año bisiesto");
//}
//else{
//    alert("No es un año bisiesto");
//}

//Punto 23
//
//let numero = Math.floor(Math.random() * 10);
//alert(numero); //para comprobar que el codigo funciona muestra el numero random
//let numUser = parseInt(prompt("Ingrese el numero a ver si adivina: "));
//
//if(numUser === numero){
//    alert("Buen trabajo");
//}
//else{
//    alert("No corresponde");
//}

//Punto 24

//let array = [1,2,3,4,5,6];

//a
//let cont = 0;
//while (cont <= 5) {
//    console.log(array[cont]);
//    cont++;
//}

//b
//for (let i = 0; i < array.length; i++) {
//    console.log(array[i]);
//}

//c
//array.forEach(e => {
//    console.log(e+1);
//})

//d
//let arrayN = new Array();
//
//array.forEach(e => {
//    arrayN.push(e+1);
//})

//e
//let promedio = 0; 
//array.forEach(e => {
//    promedio += e;
//})
//
//promedio /= array.length;
//console.log(promedio);

//Punto 25
//
//let array = new Array();
//let numero;
//for(let i = 0; i < 20; i++){
//    numero = Math.floor(Math.random()*50);
//    array.push(numero);
//}
//
//array.forEach(e =>{
//    console.log(e);
//})

//Punto 26

//let cant = parseInt(prompt("Ingrese un numero: "));
//let array = new Array();
//let n;
//for(let i = 0; i < cant; i++){
//    n = Math.floor(Math.random()*20);
//    array.push(n);
//}
//
//array.forEach(e =>{
//    console.log(e);
//})

//Punto 27

//let array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
//let color = prompt("Ingrese un color: ");
//
//if(array.includes(color)){
//    alert("Se encuentra dentro del array");
//}
//else{
//    alert("Color erroneo");
//}

//Punto 28

//let nombres = new Array();
//for(let i = 0;i < 3; i++){
//    nombres.push(prompt("Ingrese un nombre: "));
//}
//
//alert(nombres);

//Punto 29
//
//let oracion = prompt("Ingrese texto separado por ,");
//let array = new Array();
//for (let i = 0; i < oracion.length; i++) {
//    array.push(oracion[i]);
//}
//
//let arrayN = array.filter(e => e !== ",");
//console.log(arrayN);

//Punto 30

//let array = ["Esto", "es", "string"];
//console.log(array.toString());

//Punto 31

//function DevolverPi() {
//    let pi = Math.PI;
//    return pi;
//}
//
//let variable = DevolverPi();
//console.log(variable);

//Punto 32

//function DevolverPrecio(precio,iva){
//    let total = 0;
//    if(iva === 0){
//        total = precio + (precio*21)/100;
//    }
//    else{
//        total = precio + (precio*iva)/100;
//    }
//    return total;
//}
//
//let precio = parseInt(prompt("Ingrese el precio: "));
//let iva = parseInt(prompt("Ingrese el valor de iva: "));
//console.log("El precio total es: " + DevolverPrecio(precio,iva));

//Punto 33

//function NumGenerator(min, max){
//    let aleatorio = 0;
//    if(min === 0 && max === 0){
//        aleatorio = Math.floor(Math.random() * (100 - 1) + 1);
//    }
//    else{
//        aleatorio = Math.floor(Math.random() * (max - min) + min);
//    }
//    return aleatorio;
//}
//
//let Max = parseInt(prompt("Ingrese un numero cualquiera como maximo: "));
//let Min = parseInt(prompt("Ingrese un numero cualquiera como minimo: "));
//console.log(NumGenerator(Min,Max));

//Punto 34

//function FechaHora(){
//    let fecha = new Date().toLocaleDateString('es', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
//    let horario = new Date();
//    var horas = horario.getHours();
//    var minutos = horario.getMinutes();
//    if(horas < 10) { 
//        horas = '0' + horas; 
//    }
//    if(minutos < 10) {  
//        minutos = '0' + minutos; 
//    }
//    var parrafo = document.createElement("p");
//    var pTexto = document.createTextNode("Hoy es " + fecha + " y son las " + horas + ":" + minutos +" horas");
//    parrafo.appendChild(pTexto);
//
//    document.body.appendChild(parrafo);
//}
//
//window.onload = FechaHora();

//Punto 35

//let timer = Date.now();
//let nombre = prompt("Ingrese su nombre completo: ");
//let segundos = (Date.now() - timer)/1000;
//alert("En introducir " + nombre + " ha tardado " + Math.round(segundos) +  " segundos");

//Punto 36
//function startTime(){
//    let today = new Date();
//    var h=today.getHours();
//    var m=today.getMinutes();
//    var s=today.getSeconds();
//    var m=checkTime(m);
//    var s=checkTime(s);
//    document.getElementById("reloj").innerHTML= h+":"+m+":"+s;
//    let t=setTimeout(startTime(),500);
//}
//
//function checkTime(i){
//    if (i<10) {
//        i = "0" + i;
//    }
//    return i;
//}
//
//window.onload = setInterval(startTime(), 1000);