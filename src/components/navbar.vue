<template>
  <nav>
    <img class="logo" src="@/assets/logo.png" alt="Logo">
    <ul>
      <li><router-link to="/perfil">Perfil</router-link></li>
      <li><router-link to="/dashboard">Sala Principal</router-link></li>
      <!-- <li><router-link to="/editar_perfil">Editar Perfil</router-link></li> -->
      <li><router-link to="/calendario">Calendario</router-link></li>
      <li><button @click="cerrarSesion" class="boton-logout">Cerrar Sesión</button></li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const cerrarSesion = () => {
  // Limpiar el localStorage
  localStorage.removeItem('usuarioActual')
  localStorage.removeItem('usuarios')
  localStorage.removeItem('fichasMedicas')
  localStorage.removeItem('citas')
  localStorage.removeItem('eventosCalendario')
  
  // Mostrar mensaje de confirmación
  alert('Sesión cerrada exitosamente')
  
  // Redirigir al login
  router.push('/login')
}
</script>

<style src="@/assets/navbar.css" scoped></style>