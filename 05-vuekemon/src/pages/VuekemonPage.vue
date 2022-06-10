<template>
  <img
    src="https://fontmeme.com/permalink/220610/da2095bb695d0081b93aa40d7016514b.png"
    alt="fuente-pokemon"
    border="0"
  />
  <div v-if="listaArray">
    <VuekemonImg :vuekemon-id="pokemon.id" :respuesta="hayRespuesta" />
    <VuekemonOpciones
      @mi-answer="activarRespuesta"
      :lista-opciones="listaArray"
    />
    {{ msg }}
  </div>
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
        this.msg = `Correcto ${this.pokemon.name}`;
      } else {
        this.msg = `Fallaste, era ${this.pokemon.name}`;
      }
    },
    async cargar() {
      this.listaArray = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.listaArray[rndInt];
    },
  },
  mounted() {
    this.cargar();
  },
};
</script>

<style scoped>
</style>

