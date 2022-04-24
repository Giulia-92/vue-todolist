const toodolist = new Vue ({
    el: '#lista',
    data:{
        tiramisu: [
            {
                check:false,
                nomeIngrediente:'savoiardi',
            },
             {
                check:false,
                nomeIngrediente:'zucchero',
            },
            {
                check:false,
                nomeIngrediente:'mascarpone',
            },
            {
                check:false,
                nomeIngrediente:'tuorli',
            },
            {
                check:false,
                nomeIngrediente:'caffe',
            },
            {
                check:false,
                nomeIngrediente:'cacao',
            },
            {
                check:false,
                nomeIngrediente:'marsala',
            }
        ],
        nuovoIngrediente:'',
    },
    methods: {
        aggiungi(i){
        const ingrediente = {
            check: false,
            nomeIngrediente:this.nuovoIngrediente,
        }
           this.tiramisu.push(ingrediente)
           this.nuovoIngrediente ;

        },
        rimuovi(i){
            this.tiramisu.splice(i,1)
        }
       
    },

})