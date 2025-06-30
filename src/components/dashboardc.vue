<template>
  <Navbar />
  <div class="dashboard">
    <div class="bienvenida">
      <h2>¡Hola! {{cuentas}} </h2>
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
      <router-link to="/editar_perfil"><button>Editar Perfil</button></router-link>
      <router-link to="/calendario"><button>Calendario</button></router-link>
      <router-link to="/subir_fichas"><button>Subir Fichas Médicas</button></router-link>
      <router-link to="/hablar_tutor"><button>Hablar con Tutor</button></router-link>
      <router-link to="/agendar_citas"><button>Agendar Cita Médica</button></router-link>
    </div>
  </div>
</template>
<script setup >
import router from '@/router';
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

.dashboard {
  display: flex;
  flex-direction: column;      /* Apila los hijos verticalmente */
  align-items: center;         /* Centra horizontalmente */
  justify-content: center;     /* Centra verticalmente */
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
  max-width: 350px;
 position: fixed;
 top: 100px;
  margin-bottom: 2rem;
 } 

.contenedor {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  /* Quita estas líneas: */
  /* position: fixed; */
  /* top: 250px; */
  margin-bottom: 2rem;
}

.botones {
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>