let url = "BD.json";
let Mail = document.getElementById("cuenta");
let Nombre = document.getElementById("Nombre");
let Apellido = document.getElementById("Apellido");
let Phone = document.getElementById("Telefono");
let Comment = document.getElementById("Comentario");

Mail.setAttribute("type", "email");
const app = new Vue({
    el:"#formulario",
    data: {
        name : [],
        lastname: [],
        phone: [],
        mail: [],
        comment: [],
    },
    //created(){
    //    this.ConfirmarCuenta();
    //},
    methods:{ 
        ConfirmarCuenta(){
            app.name = Nombre;
            app.lastname = Apellido;
            app.phone = Phone;
            app.mail = Mail;
            app.comment = Comment;
            alert(app.mail);
            //fetch(url).then(function(response){
            //    return response.json();
            //}).then(function(obj){
            //    alert(obj);
            //    Nombre = "";
            //}).catch(function(error){
            //    console.log("El error es: ");
            //    console.log(error);
            //})
        }
    }
})
