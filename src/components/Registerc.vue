<template>

  <Navbar2 />
  <div class="contenedor">
    <div class="formulario-registro">
      <img src="../assets/logo.png" alt="Logo" class="logo">
      <h1>Registro de Estudiante</h1>
      <form @submit.prevent="handleRegistro">
        <label v-focus for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required />
        
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="usuario.email" required />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="usuario.password" required />

        <label for="facultad">Facultad:</label>
        <select id="facultad" v-model="usuario.facultad" required>
          <option value="" disabled selected>Seleccione su facultad</option>
          <option value="Ingeniería">Ingeniería</option>
          <option value="Ciencias Sociales">Ciencias Sociales</option>
          <option value="Ciencias de la Salud">Ciencias de la Salud</option>
          <option value="Humanidades">Humanidades</option>
        </select>

        <label for="discapacidad">Discapacidad:</label>
        <select id="discapacidad" v-model="usuario.discapacidad" required>
          <option value="" disabled selected>Seleccione su discapacidad</option>
          <option value="Discapacidad Visual">Discapacidad Visual</option>
          <option value="Discapacidad Auditiva">Discapacidad Auditiva</option>
          <option value="Discapacidad Motriz">Discapacidad Motriz</option>
          <option value="Discapacidad Intelectual">Discapacidad Intelectual</option>
        </select>

        <button type="submit">Registrar</button>
      </form>
      <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar2 from '@/components/navbar2.vue'

const vFocus = {
  mounted: (el) => el.focus()
}

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
  window.location.href = "/login"
}
</script>

<style scoped src="../assets/background.css"></style>

<style scoped>
.contenedor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin: 0 !important;
  padding: 1rem !important;
  background-color: #edecec;
  max-width: none !important;
  overflow-y: auto;
}

.formulario-registro {
  background-color: #edecec;
  padding: 2rem;
  margin: auto;
  border-radius: 8px;
  color: black;
  text-align: center;
  width: 90vw;
  max-width: 450px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  margin-top: 4%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.50);
}

label {
  display: block;
  margin-bottom: 0.3rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

input, select {
  width: 95%;
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}

button {
  background-color: #3c763d;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 60%;
  margin-top: 0.5rem;
}

button:hover {
  background-color: #2a5f2c;
}

a {
  color: #2a5f2c;
  text-decoration: none;
  font-weight: bold;
}

p {
  margin-top: 1rem;
  color: black;
  font: 16px georgia, serif;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: black;
  font: bold 20px georgia, serif;
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

/* Mejoras para dispositivos móviles */
@media (max-width: 768px) {
  .formulario-registro {
    width: 95vw;
    padding: 1.5rem;
    max-height: 85vh;
  }
  
  h1 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  label {
    font-size: 13px;
  }
  
  input, select {
    font-size: 13px;
    padding: 0.5rem;
  }
  
  button {
    width: 80%;
    padding: 0.6rem 1rem;
    font-size: 14px;
  }
}
</style>
