<template>
  <Navbar />
  <div class="dashboard">
    <div class="bienvenida">
      <h2>¡Hola {{ usuario?.nombre || 'Usuario' }}!</h2>
      <p>Revisa tus fichas médicas abajo</p>
    </div>

    <div class="contenedor">
      <h3>Fichas Médicas</h3>
      <table>
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
            <td colspan="4">No tienes fichas aún</td>
          </tr>
          <tr v-for="(ficha, i) in fichas" :key="i">
            <td>{{ ficha.nombre }}</td>
            <td>{{ ficha.descripcion }}</td>
            <td>{{ formatFecha(ficha.fecha) }}</td>
            <td><button @click="descargar(ficha)">Descargar</button></td>
          </tr>
        </tbody>
      </table>
          <div class="botones">
      <router-link to="/editar_perfil"><button>Editar Perfil</button></router-link>
      <!-- <router-link to="/calendario"><button>Calendario</button></router-link> -->
      <router-link to="/subir_fichas"><button>Subir Fichas Médicas</button></router-link>
      <router-link to="/hablar_tutor"><button>Notas de Tutor</button></router-link>
      <router-link to="/agendar_citas"><button>Agendar Cita Médica</button></router-link>
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


<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;      
  align-items: center;         
  justify-content: center;     
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  background-color: #e5f4d4;
  border-radius: 0;
  box-shadow: none;
}

.bienvenida {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  text-align: left;
  width: 100%;
  max-width: 850px;
  margin-bottom: 1rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
 } 

.contenedor {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 850px;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.botones {
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 850px;
  /* margin: 2rem auto 0 auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.botones button {
  background-color: #9bb055;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1.5em 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
h2, h3, p {
  color: #112712; /* Color verde oscuro */
  font-weight: bold;
}

.botones button:hover {
  background: rgb(78, 134, 46);
}

th,td {
  color: #112712; /* Color verde oscuro */
  font-weight: bold;
  position: relative;
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;

}
</style>

