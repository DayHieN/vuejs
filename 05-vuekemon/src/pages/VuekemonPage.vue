<template>
  <h1>¿Cuál es este Pokémon?</h1>
  <VuekemonImg :vuekemon-id="idVuekemon" :respuesta="false" />
  <VuekemonOpciones
    :lista-opciones="[
      { id: 25, nombre: 'eustaquio' },
      { id: 34, nombre: 'patatta' },
    ]"
  />
  <div></div>
</template>
<script>
import VuekemonImg from "@/components/VuekemonImg.vue";
import VuekemonOpciones from "@/components/VuekemonOpciones.vue";
export default {
  data() {
    return {
      idVuekemon: 3,
    };
  },
  components: {
    VuekemonImg,
    VuekemonOpciones,
  },
};
</script>

<style scoped>
</style>

