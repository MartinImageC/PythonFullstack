new Vue({
    el:"#formVue",
    data:{
        nuevaTarea:"",
        tareas:[],
        valorX:"X"
    },
    methods: {
        guardarTarea(){
            this.tareas.push(this.nuevaTarea)
            this.nuevaTarea=""     
        }

    },
})
