//
//async function ObtainPosition(){
//    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
//    //console.log(response);
//    const data = await response.json();
//    //console.log(data);
//
//    const {latitude,longitude,velocity,units} = data;
//    console.log(latitude);
//    console.log(longitude);
//    console.log(velocity);
//    console.log(units);
//
//    document.getElementById("lat").textContent = latitude;
//    document.getElementById("lon").textContent = longitude;
//    document.getElementById("vel").textContent = velocity;
//    document.getElementById("unit").textContent = units;
//
//}
//ObtainPosition();

async function ObtainPokemon(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await response.json();
    console.log(data);
    
    document.getElementById("Primero").innerHTML="<h2>" + data.name + "</h2>";

    let image = document.createElement("img");
    image.setAttribute("src", data.sprites.front_default);
    let divisor = document.getElementById("Primero");
    divisor.appendChild(image);
}
ObtainPokemon();