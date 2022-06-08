<template>
  <h3>Vuekemon Imagen</h3>
  <div class="vuekemon-container">
    <img :src="srcImg" alt="pokemon" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      vuekemonId: null,
      srcImg: null,
    };
  },
  methods: {
    obtenerImagen() {
      this.srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.vuekemonId}.svg`;
    },
    random() {
      this.vuekemonId = parseInt(Math.random() * 600);
    },
  },
  beforeMount() {
    this.random();
  },
  mounted() {
    this.obtenerImagen();
  },
};
</script>
<style scoped>
.vuekemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-vuokemon {
  filter: brightness(0);
}
</style>