let formulario= document.querySelector("form")

let input = document.querySelector(".input")
let tareas = []
let ul = document.querySelector("ul")

formulario.onsubmit = ev=>{
    ev.preventDefault();
    tareas.push(input.value)

    let li =  document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
    input.value=""
}