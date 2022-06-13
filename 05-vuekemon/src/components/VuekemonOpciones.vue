<template>
<<<<<<< HEAD
  
=======
>>>>>>> 669896b10da9021a6b968f561a3f6b2dc9886101
  <div class="vuopciones-container">
    <ul>
      <li
        v-for="opcion in listaOpciones"
        :key="opcion.id"
        @click="$emit('miRespuesta', opcion.id)"
      >
        {{ opcion.name }}
      </li>
    </ul>
  </div>
  <div>
    <button>Jugar otra vez</button>
  </div>
</template>

<script>
export default {
  props: {
    listaOpciones: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

li {
  list-style:none;
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
.correcto{
  background-color: greenyellow;
}
.vuopciones-container {
  position: relative;
<<<<<<< HEAD
  right: 18px;
=======
  right: 22px;
>>>>>>> 669896b10da9021a6b968f561a3f6b2dc9886101
  display: flex;
  justify-content: center;
}
</style>