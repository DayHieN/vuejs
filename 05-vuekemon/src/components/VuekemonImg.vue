<template>
  <h3>Vuekemon Imagen</h3>
  <div :class="mountedClass">
    <img :src="srcImg" alt="pokemon" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      vuekemonId: null,
      srcImg: null,
      mountedClass: null,
      guessedClass: null,
    };
  },
  methods: {
    obtenerImagen() {
      this.srcImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.vuekemonId}.svg`;
    },
    random() {
      this.vuekemonId = parseInt(Math.random() * 600);
    },
    oscurecerPokemon() {
      this.mountedClass = "vuekemon-container hidden-vuekemon";
    },
  },
  beforeMount() {
    this.random();
  },
  mounted() {
    this.oscurecerPokemon();
    this.obtenerImagen();
  },
};
</script>
<style scoped>
.vuekemon-container {
  display:flex;
  justify-content: center;
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
.hidden-vuekemon {
  filter: brightness(0);
}
</style>