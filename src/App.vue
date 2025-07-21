<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/register">Registro</router-link>
    </nav>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado para el tamaño de la pantalla
const screenSize = ref('mobile')

// Detectar cambios en el tamaño de la pantalla
onMounted(() => {
  const updateScreenSize = () => {
    if (window.innerWidth >= 1280) screenSize.value = 'large-desktop'
    else if (window.innerWidth >= 1024) screenSize.value = 'desktop'
    else if (window.innerWidth >= 768) screenSize.value = 'tablet'
    else screenSize.value = 'mobile'
  }
  
  window.addEventListener('resize', updateScreenSize)
  updateScreenSize()
})
</script>

<style scoped>
.main-nav {
  padding: 1rem;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.main-nav a.router-link-active {
  color: #007bff;
}

@media (max-width: 640px) {
  .main-nav {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
}
</style>