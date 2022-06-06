<template>
  <h1>{{ titulo }}</h1>
  <div>
    {{ "Contador: " + contador }}
  </div>

  <button @click="disminuir()">-1</button>
  <button @click="aumentar()">+1</button>
</template>

<script>
export default {
  name: "ContadorElemento",
  props: {
    titulo: String,
  },
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    aumentar() {
      this.contador += 1;
    },
    disminuir() {
      this.contador -= 1;
    },
  },
};
</script>

<style>
button {
  background-color: rgb(65, 184, 131);
  border-radius: 10px;
  margin: 20px;
  width: 10%;
  font-size: 20px;
  color: white;
  transition: 0.3s;
}
button:hover {
  transition: 0.3s;
  background-color: aqua;
  color: black;
}
</style>