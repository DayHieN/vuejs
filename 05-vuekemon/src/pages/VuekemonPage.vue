<template>
  <img
    src="https://fontmeme.com/permalink/220610/da2095bb695d0081b93aa40d7016514b.png"
    alt="fuente-pokemon"
    border="0"
  />
  <div v-if="listaArray">
    <VuekemonImg :vuekemon-id="pokemon.id" :respuesta="hayRespuesta" />
    <VuekemonOpciones
<<<<<<< HEAD
      @mi-respuesta="activarRespuesta"
=======
      v-if="!hayRespuesta"
      @mi-answer="activarRespuesta"
>>>>>>> 669896b10da9021a6b968f561a3f6b2dc9886101
      :lista-opciones="listaArray"
      
    />
    <h3>{{ msg }}</h3>
  </div>
  <button v-if="hayRespuesta" @click="newGame">Jugar de nuevo</button>
</template>

<script>
import getPokemonOptions from "@/helpers/vuekemonUtilidades.js";
import VuekemonImg from "@/components/VuekemonImg.vue";
import VuekemonOpciones from "@/components/VuekemonOpciones.vue";

export default {
  data() {
    return {
      pokemon: null,
      hayRespuesta: false,
      listaArray: null,
      msg: null,
    };
  },
  components: {
    VuekemonImg,
    VuekemonOpciones,
  },
  methods: {
    activarRespuesta(data) {
      this.hayRespuesta = true;
      if (data === this.pokemon.id) {
        this.msg = `¡Correcto! ¡Es ${this.pokemon.name}!`;
      } else {
<<<<<<< HEAD
        this.msg = `¡Qué pena! ¡Es ${this.pokemon.name}!`;
=======
        this.msg = `¡Fallaste! ¡Es ${this.pokemon.name}!`;
>>>>>>> 669896b10da9021a6b968f561a3f6b2dc9886101
      }
    },
    async cargar() {
      this.listaArray = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.listaArray[rndInt];
    },
    newGame() {
      this.pokemon = null;
      this.hayRespuesta = false;
      this.listaArray = null;
      this.msg = null;
      this.cargar();
    },
  },
  mounted() {
    this.cargar();
  },
};
</script>

<style scoped>
</style>

