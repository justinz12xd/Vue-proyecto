<template>
  <Background />
  <navbar />
  <div class="contenedor">
    <div class="five">
    <form class="formulario-registro" @submit.prevent="handleRegistro">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <h1>Registro de Estudiante</h1>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="usuario.nombre" required />
      <label for="email">Correo electronico:</label>
      <input type="email" id="email" v-model="usuario.email" required />

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="usuario.password" required />
      <label for="Facultad">Facultad:</label>
      <select id="facultad" v-model="usuario.facultad" required>
        <option value="" disabled selected>Seleccione su facultad</option>
        <option value="Ingeniería">Ingeniería</option>
        <option value="Ciencias Sociales">Ciencias Sociales</option>
        <option value="Ciencias de la Salud">Ciencias de la Salud</option>
        <option value="Humanidades">Humanidades</option>
      </select>
      <label for="discapacidad">Discapacidad:</label>
      <input type="text" id="discapacidad" v-model="usuario.discapacidad" required />

      <button type="submit">Registrar</button>
    </form>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import Background from '../components/background.vue'
import navbar from '@/components/navbar2.vue'

const usuario = ref({
  nombre: '',
  email: '',
  password: '',
  facultad: '',
  discapacidad: ''
})

function handleRegistro() {
  // Cargar cuentas existentes del localStorage
  let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {}

  // Aquí podrías usar el nombre como clave, o agregar un campo email
  if (cuentas[usuario.value.nombre]) {
    alert("Este usuario ya está registrado.")
    return
  }

  // Guardar la nueva cuenta
  cuentas[usuario.value.nombre] = { ...usuario.value }
  localStorage.setItem("cuentas", JSON.stringify(cuentas))
  localStorage.setItem("usuarioActual", usuario.value.nombre)
  alert("Registro exitoso. Ahora puedes iniciar sesión.")
  // Redirigir si quieres
  // window.location.href = "/login"
}
</script>

<style scoped src="../assets/background.css"></style>
<style scoped>
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
select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
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
  background-color: rgba(155, 176, 85, 0.6); 
  margin-top: 15vh;
}
h1 {
  font-size: 24px;
  margin-bottom: 1rem;
  font-weight: bold;
    color: #112712; 
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #112712; 
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
