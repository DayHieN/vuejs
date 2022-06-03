console.log(`%c ${Vue.version}`, 'background: rgb(81,77,135);background: linear-gradient(90deg, rgba(81,77,135,1) 0%, rgba(59,171,72,1) 36%, rgba(0,212,255,1) 100%);');


const miColeccion = [
    { tipo: 'serie', titulo: 'Los informáticos', ano: '2006-2013' },
    { tipo: 'serie', titulo: 'Halt & Catch Fire', ano: '2014-2017' },
    { tipo: 'serie', titulo: 'Silicon Valley', ano: '2014-2019' },
    { tipo: 'serie', titulo: 'Mr. Robot', ano: '2015-2019' },
    { tipo: 'serie', titulo: 'Black Mirror: Bandersnatch', ano: '2018' },
    { tipo: 'serie', titulo: 'Upload', ano: '2020-' },
    { tipo: 'serie', titulo: 'El código que valía millones', ano: '2021' },
    { tipo: 'Película', titulo: 'La red social', ano: '2010' },
    { tipo: 'Película', titulo: 'Piratas de Sillicon Valley', ano: '1999' },
    { tipo: 'Película', titulo: 'Jobs', ano: '2013' },
    { tipo: 'Película', titulo: 'Descifrando Enigma', ano: '2014' },
    { tipo: 'Película', titulo: 'Ex Machina', ano: '2014' },
    { tipo: 'Película', titulo: 'A.I. Inteligencia Artificial', ano: '2001' },
    { tipo: 'Película', titulo: 'El hombre bicentenario', ano: '1999' }];

const app = Vue.createApp({
    // template: `
    // <h1>Hola Mundo</h1>
    // <p>Desde app.js</p>
    // {{  }}`,

    data() {
        return {
            titulo: 'Lentejas',
            subtitulo: 'limón',
            miColeccion,
            newItem: '',
        }
    },

    methods: {
        mayus() {
            this.titulo = this.titulo.toUpperCase()
            console.log(this.titulo)
        },
        metodo() {
            this.titulo = "patata"
            this.subtitulo = "frita"
            this.mayus()
        },
        addToCollection() {
            this.miColeccion.unshift({
                tipo: "Serie",
                titulo: this.newItem,
                ano: 2022
            });

        }
    },
}).mount('#miApp');



