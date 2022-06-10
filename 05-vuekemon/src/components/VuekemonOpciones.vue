<template>
  <h3>Vuekemon Opciones</h3>
  <div class="vuopciones-container">
    <ul>
      <li v-for="opcion in listaOpciones" :key="opcion.id">
        {{ opcion.nombre }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    listaOpciones: {
      type: Array,
    },
  },
  data() {
    return {
      i: null,
      j: null,
      k: null,
      array: [],
      shuffledArray: [],

      opciones: {
        id: [, ,],
        nombres: [],
      },
    };
  },
  methods: {
    crearArray() {
      for (this.i = 1; this.i <= 600; this.i++) {
        this.array.push(this.i);
      }
    },
    shuffle(array) {
      var m = array.length,
        t,
        i;

      while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    },
  },
  beforeMount() {
    this.crearArray();
    console.log("array " + this.array);
    this.shuffledArray = this.shuffle(this.array);
    console.log("shuffledArray " + this.shuffledArray);
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.vuopciones-container {
  display: flex;
  justify-content: center;
}
</style>