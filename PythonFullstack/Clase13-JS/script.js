// alert("ah"); para mensajes tipo Pop-up

let usuario = "alejo";
let User = "juan";
let _usuario = "mariano";
let $precio = 456;
let name_user = "Exlol";

let origen = "Buenos Aires";
let destino = "Miami"; 

    console.log("Este vuelo va de " + origen + "a" + destino);

let str1 = "string";
let str2 = "otro string"
let variableNueva = str1 + "y ademas" + str2;
let variableMasNueva = `${str1} y ademas ${str2}`

    console.log(variableMasNueva);

//Number    
let num1 = 5;
let num2 = 20;

let multi = num1*num2;
let div = num1/num2;
let suma = num1+num2;
let resta = num1-num2;

    console.log(suma); 
    console.log(resta);
    console.log(div);
    console.log(multi);


//input de datos
let nombreUsuario = prompt("Como te llamas??");
let numA = parseInt(prompt("Ingrese un num"));
let numB = parseInt(prompt("Ingrese otro num")); //parseFloat para num con coma

let total = numA + numB;

console.log(total);
alert("Hola " + nombreUsuario);

//undefined
//null
//NaN
//Infinity

//Boolean
let a = true;
let b  = false;

if(4<5){
    return a; //console.log(a);
}

//Funciones

let caracter = "12345678"
console.log(caracter.length);
//Repetir : console.log(caracter.repeat(3));
//Mayusculas :  console.log(caracter.toUpperCase());
//Error : console.error(caracter.repeat(3));
//Aviso : console.warn(caracter.repeat(3));

//Escribir en el html

document.write("<h2> Este es un h2 </h2>")

//TypeOf

console.log(typeof a);