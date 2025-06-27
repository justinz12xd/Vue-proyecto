<template>
  <nav>
    <img class="logo" src="@/assets/logo.png" alt="Logo">
    <ul>
      <li><router-link to="/login">Iniciar Sesión</router-link></li>
      <li><router-link to="/registro">Registrarse</router-link></li>

    </ul>
  </nav>
</template>

<script setup>
// No necesitas lógica aquí por ahora
</script>

<style src="@/assets/navbar.css" scoped></style>