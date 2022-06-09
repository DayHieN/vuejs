<template>
  <h3>Vuekemon Opciones</h3>
  <div class="vuopciones-container">
    <ul>
      <li>Opción 1</li>
      <li>Opción 2</li>
      <li>Opción 3</li>
      <li>Opción 4</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      i: null,
      j: null,
      array: [],
      shuffledArray: [],
      primerosCuatro: [, ,],
      pokemon: null,
      opciones: [, , ,],
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
    rellenarPkmn() {
      for (this.j = 0; this.j <= 3; this.j++) {
        this.primerosCuatro[this.j] = this.shuffledArray[this.j];
      }
    },
    async fetchPokemon() {
      this.pokemon =
        this.shuffledArray[
          parseInt(Math.random() * this.primerosCuatro.length)
        ];

      const { id } = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.pokemon}`
      ).then((response) => response.json());
      console.log(id);
    },
  },
  beforeMount() {
    this.crearArray();
    console.log(this.array);
    this.shuffledArray = this.shuffle(this.array);
    console.log(this.shuffledArray);
    this.rellenarPkmn();
    console.log(this.primerosCuatro);
    this.fetchPokemon();
    console.log(this.opciones);
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