console.log("While")

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

for (let contador = 1; contador < 10; contador++) {
    console.log(contador);
}

console.log("For");

let num = parseInt(prompt("Agregue un num"));

for (let i = 0; i <= num; i++) {
    if(i%2==0){
        console.log(i);
    }
}

console.log("Array");

let newArray = ["cristian","maria",1,2,3,4,true,false];
console.log(newArray);

let newArray2 = new Array("juan", "seba");

let arrayVacio = new Array();
arrayVacio[0] = "juan";
arrayVacio[1] = "maria";
arrayVacio[2] = "pedro";
console.log(arrayVacio); //arrayVacio.length tamaño del array
//arrayVacio[0] --> posicion dentro del array

arrayVacio[arrayVacio.length] = "jorge"; //arrayVacio.push("jorge");

arrayVacio.unshift("emi");//agrega al principio

arrayVacio.shift();//elimina el primer elemento

arrayVacio.pop();//elimina el ultimo elemento

console.log(arrayVacio.reverse());//invierte el array
console.log(arrayVacio.join("-"));//muestra los elementos con alguna condicion particular

//---------------------------- O ----------------------------------//

let unArray = [1,2,3]
let otroArray = [4,5,6]

let nuevoArray = unArray.concat(otroArray);
console.log(nuevoArray);

//let nuevoArray = [].concat(unArray, nuevoArray);
//console.log(nuevoArray);

let arrayNombre = ["juan","emi","maria","pedro","carlos"];

arrayNombre.sort();
console.log(arrayNombre);

//let unArray = [11,2,3,22,54,6,78,98,9]
//unArray.sort((a,b) => a - b);
//console.log(unArray);

//Analizar un array de string
let email = "martin@gmail.com"

if(email.includes("@")){
    console.log("es un mail valido");
}

//cant de vocales
let texto = "este es un texto"
let vocales = "aeiou"
let cont = 0;

for (let i = 0; i <= texto.length; i++) {
    if(vocales.includes([texto[i]])){
        cont++;
    }
}

console.log(cont);