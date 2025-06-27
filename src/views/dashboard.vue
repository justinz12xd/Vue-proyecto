<template>
  <Navbar />
  <div class="dashboard-grid">
    <div class="bienvenida">
      <h2>¡Hola!</h2>
      <p><strong>¡¡Que tengas un hermoso día!!</strong></p>
    </div>
    <div class="contenedor">
      <h2>Bienvenido</h2>
      <h3>Fichas Médicas</h3>
      <table id="tabla-fichas">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Archivo</th>
          </tr>
        </thead>
        <tbody>
          <!-- Fichas cargadas dinámicamente -->
        </tbody>
      </table>
    </div>
    <div class="botones">
      <button onclick="location.href='subir_fichas.html'">Subir fichas médicas</button>
      <button onclick="location.href='hablar_tutor.html'">Hablar con tutor</button>
      <button onclick="location.href='agendar_citas.html'">Agendar cita médica</button>
      <button onclick="location.href='calendario.html'">Calendario</button>
    </div>
  </div>
</template>
<script setup >
import Navbar from '../components/navbar.vue';
import  {ref, onMounted} from 'vue';
const usuarioActual = ref(null);
onMounted(() => {
  // Cargar el nombre del usuario actual desde localStorage
  const nombreUsuario = localStorage.getItem('usuarioActual')
  if (nombreUsuario) {
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || {}
    usuarioActual.value = cuentas[nombreUsuario]
  }
})


</script>
<style src="@/assets/navbar.css" scoped></style>
<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  padding: 2rem;
  min-height: 80vh;
  margin-top: 100px; /* deja espacio para el navbar fijo */
}

.bienvenida {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  text-align: left;
  width: 100%;
  max-width: 350px;
  position: fixed;
  top: 100px;
}

.contenedor {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  position: fixed;
  top:250px;
}

.botones {
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 350px;
  position: fixed;
  bottom: 30px;
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
</style>