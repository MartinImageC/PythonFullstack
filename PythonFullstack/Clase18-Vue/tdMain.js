new Vue({
    el:"#formVue",
    data:{
        nuevaTarea:"",
        tareas:[]
    },
    methods: {
        guardarTarea(){
            this.tareas.push(this.nuevaTarea),
            this.nuevaTarea=""
        }
    },
})

