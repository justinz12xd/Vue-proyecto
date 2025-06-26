<template>
<div class="fondo">
  <div class="contenedor">
    <div class="five">
    <form class="formulario-registro" @submit.prevent="registrarUsuario">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <h1>Registro de Estudiante</h1>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="usuario.nombre" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="usuario.password" required />

      <button type="submit">Registrar</button>
    </form>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'

// Definir los datos de registro
const usuario = ref({
  nombre: '',
  password: ''
})

// Función que se ejecuta al enviar el formulario
const registrarUsuario = () => {
  // Aquí puedes manejar la lógica para el registro
  console.log('Usuario registrado:', usuario.value)
}
</script>

<style scoped>
.fondo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-color: #f0f0f0; 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
 
  border: 1px solid rgb(0, 0, 0);
  z-index: 0;
}
.logo {
  width: 100px;
  height: 100px;
  margin: 0px auto;
  display: block;
}
.contenedor {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

  /* justify-content: center; 
  align-items: center; 
  background-color: #212121; 
  text-align: center; */

.formulario-registro {
  background-color: #9bb055;
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  width: 400px;
  margin: 50px auto;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  font: 16px georgia, serif;
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
  background-color: #3c763d;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font: 16px georgia, serif;
  width: 100%; 
}

button:hover {
  background-color: #2a5f2c;
}
</style>
