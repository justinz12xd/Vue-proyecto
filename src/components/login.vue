<template>
  <div class="contenedor">
    <div class="fondo">
      <div class="formulario-registro">
        <img src="../assets/logo.png" alt="Logo" class="logo">
        <h1>Iniciar Sesión</h1>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="usuario.password" required />
        <button @click="iniciarSesion">Iniciar Sesión</button>
        <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const usuario = ref({
  nombre: '',
  password: ''
})

const iniciarSesion = () => {
  console.log('Iniciar sesión con:', usuario.value)
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
 .fondo {
  background-image: url('@/assets/background.jpg');
  background-color: #f0f0f0; 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  border: 1px solid rgb(0, 0, 0);
} 

.formulario-registro {
  background-color: #9bb055;
  padding: 2rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  width: 90vw;
  max-width: 400px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.logo {
  width: 100px;
  height: 80px;
  margin: 0 auto 1rem;
  display: block;
  border-radius: 50%;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #3c763d;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
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
  color: white;
  font: 16px georgia, serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font: bold 24px georgia, serif;
}

/* Optional: Improve responsiveness for smaller screens */
@media (max-width: 480px) {
  .formulario-registro {
    padding: 1.5rem;
  }

  h1 {
    font-size: 20px;
  }

  button {
    font-size: 14px;
  }
}
</style>