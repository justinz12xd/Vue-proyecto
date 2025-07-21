<template>
  <Navbar />
  <div class="dashboard">
    <div class="bienvenida">
      <h2>¡Hola {{ usuario?.nombre || 'Usuario' }}!</h2>
      <p>Revisa tus fichas médicas abajo</p>
    </div>

    <div class="contenedor">
      <h3>Fichas Médicas</h3>
      
      <!-- Vista de tabla para pantallas grandes -->
      <div class="table-container">
        <table class="desktop-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="fichas.length === 0">
              <td colspan="4" class="no-data">No tienes fichas aún</td>
            </tr>
            <tr v-for="(ficha, i) in fichas" :key="i">
              <td>{{ ficha.nombre }}</td>
              <td>{{ ficha.descripcion }}</td>
              <td>{{ formatFecha(ficha.fecha) }}</td>
              <td>
                <button @click="descargar(ficha)" class="download-btn">
                  Descargar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vista de tarjetas para pantallas móviles -->
      <div class="mobile-cards">
        <div v-if="fichas.length === 0" class="no-data-mobile">
          No tienes fichas aún
        </div>
        <div v-for="(ficha, i) in fichas" :key="i" class="ficha-card">
          <div class="card-header">
            <h4>{{ ficha.nombre }}</h4>
            <span class="fecha">{{ formatFecha(ficha.fecha) }}</span>
          </div>
          <p class="descripcion">{{ ficha.descripcion }}</p>
          <button @click="descargar(ficha)" class="download-btn-mobile">
            Descargar Archivo
          </button>
        </div>
      </div>

      <div class="botones">
        <router-link to="/editar_perfil">
          <button>Editar Perfil</button>
        </router-link>
        <router-link to="/subir-fichas">
          <button>Subir Fichas Médicas</button>
        </router-link>
        <router-link to="/notastutor">
          <button>Notas de Tutor</button>
        </router-link>
        <router-link to="/agendar_cita">
          <button>Agendar Cita Médica</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/navbar.vue'

const usuario = ref(null)
const fichas = ref([])

onMounted(() => {
  const nombre = (localStorage.getItem('usuarioActual') || '').trim()
  if (!nombre) return

  const cuentas = JSON.parse(localStorage.getItem('cuentas') || '{}')
  usuario.value = cuentas[nombre] || { nombre }

  const fichasPorUsuario = JSON.parse(localStorage.getItem('fichasMedicas') || '{}')
  fichas.value = fichasPorUsuario[nombre] || []
})

function descargar(ficha) {
  const link = document.createElement('a')
  link.href = ficha.archivo
  link.download = ficha.nombre
  link.click()
}

function formatFecha(fechaStr) {
  return new Date(fechaStr).toLocaleDateString('es-EC')
}
</script>

<style src="../style/dashboard.css"></style>