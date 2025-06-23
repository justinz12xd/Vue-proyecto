<template>
  <div class="contenedor">
    <div class="five">
    <form class="formulario-registro" @submit.prevent="registrarUsuario">
      <h1>Registro de Usuario</h1>

      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="usuario.username" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="usuario.password" required />

      <button type="submit">Registrar</button>
    </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

// Definir los datos de registro
const usuario = ref({
  username: '',
  password: ''
})

// Función que se ejecuta al enviar el formulario
const registrarUsuario = () => {
  // Aquí puedes manejar la lógica para el registro
  console.log('Usuario registrado:', usuario.value)
}
</script>

<style scoped>
  .contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);

  /* justify-content: center; 
  align-items: center; 
  background-color: #212121; 
  text-align: center; */
}

.formulario-registro {
  background-color: #1f3d24; 
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  width: 400px;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
/*con esto se centraliza el formulario pd: soy justin*/
.five {
  grid-column: 20 / 31; 
  grid-row: 1 / 5; 
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #368c6d;
}
</style>
