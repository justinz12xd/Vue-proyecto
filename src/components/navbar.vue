<template>
  <nav>
    <img class="logo" src="@/assets/logo.png" alt="Logo">
    <ul>

      <li><router-link to="/perfil">Perfil</router-link></li>
      <li><router-link to="/dashboard">Sala Principal</router-link></li>
      <li><router-link to="/editar_perfil">Editar Perfil</router-link></li>
      <li><router-link to="/calendario">Calendario</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No necesitas lógica aquí por ahora
</script>

<style src="@/assets/navbar.css" scoped></style>