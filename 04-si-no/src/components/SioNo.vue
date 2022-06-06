<template>
  <img v-if="imagen" :src="imagen" alt="fondo" />
  <!-- Fondo que oscurece toda la pantalla -->
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="¿Qué quieres saber?" v-model="pregunta" />
    <p>Recuerda terminar con un signo de interrogación (?).</p>
    <div>
      <h2 v-if="pregunta">{{ pregunta }}</h2>
      <h1 v-if="respuesta">{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      imagen: "",
    };
  },
  watch: {
    pregunta(nuevoValor) {
      if (!nuevoValor.endsWith("?")) return;
      this.preguntar();
    },
  },
  methods: {
    async preguntar() {
      this.respuesta = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (response) => response.json()
      );
      (answer == "yes") ? this.respuesta = "Sí" : this.respuesta = "No";
      this.imagen = image;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}
.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
.indecision-container {
  position: relative;
  z-index: 99;
}
input {
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  width: 250px;
}
input:focus {
  outline: none;
}
p,
label {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 150px;
}
</style>
