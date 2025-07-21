<template>

  <Navbar2 />
  <div class="contenedor">
      <div class="formulario-registro">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1>Iniciar Sesión</h1>
      <form @submit.prevent="iniciarSesion">
        <label v-focus for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="usuario.password" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
        <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Navbar2 from '@/components/navbar2.vue'

const vFocus = {
  mounted: (el) => el.focus()
}
const usuario = ref({
  nombre: '',
  password: ''
})

const router = useRouter()

const iniciarSesion = () => {
  const cuentas = JSON.parse(localStorage.getItem('cuentas')) || {}
  const user = cuentas[usuario.value.nombre]
  if (user && user.password === usuario.value.password) {
    localStorage.setItem('usuarioActual', usuario.value.nombre)
    router.push('/dashboard')
  } else {
    alert('Usuario o contraseña incorrectos')
  }
}
</script>
<style scoped>
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

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
  padding: 0 !important;
  background-color: #edecec;
  max-width: none !important;
}
.logo {
  width: 100px;
  height: 80px;
  margin: 0 auto 1rem;
  display: block;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.formulario-registro {
  background-color: #edecec;
  padding: 1rem;
  /* margin-top: 0rem; */
  border-radius: 8px;
  color: black;
  text-align: center;
  width: 90vw;
  max-width: 400px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.50);
}


label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 300px;
  max-width: 80%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

button {
  background-color: #3c763d;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 200px;
  margin-top: 1rem;
}

button:hover {
  background-color: #2a5f2c;
}

a {
  color: #2a5f2c;
  text-decoration: none;
}

p {
  margin-top: 1rem;
  color: black;
  font: 16px georgia, serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font: bold 24px georgia, serif;
}
</style>
