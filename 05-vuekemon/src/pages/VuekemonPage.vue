<template>
  <h1>¿Cuál es este Pokémon?</h1>
  <VuekemonImg />
  <VuekemonOpciones />
  <div></div>
</template>
<script>
import VuekemonImg from "../components/VuekemonImg.vue";
import VuekemonOpciones from "../components/VuekemonOpciones.vue";
export default {
  components: {
    VuekemonImg,
    VuekemonOpciones,
  },
};
</script>
<style>
</style>
src\components\VuekemonImg.vue