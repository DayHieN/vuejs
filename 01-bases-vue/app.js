console.log(Vue.version);

const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // {{  }}`,

    // data() {
    //     return { mensaje: 'Lentejas', a: 1, b: 2 }
    // },

    methods: {
        metodo() {
            return console.log("Hola metodológico");
        }
    },
});

app.mount('#miApp');