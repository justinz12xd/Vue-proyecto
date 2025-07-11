<template>
  <Navbar />
  <div class="contenido">
    <div class="comentarios-box">
      <h1>Notas del Tutor</h1>
      <p>Este espacio es para que los tutores puedan anotar sus observaciones sobre el estudiante.</p>

      <label for="comentario">Nueva observación:</label>
      <input v-model="nuevoComentario" id="comentario" type="text" placeholder="Escribe aquí..." />

      <button @click="guardarComentario">Enviar</button>

      <div class="historial" v-if="comentarios.length > 0">
        <h3>Observaciones anteriores:</h3>
        <ul>
          <li v-for="(c, index) in comentarios" :key="index">{{ c }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../components/navbar.vue'

const nuevoComentario = ref('')
const comentarios = ref([])
const usuario = ref('')

onMounted(() => {
  usuario.value = (localStorage.getItem('usuarioActual') || '').trim()
  if (usuario.value) {
    const notasGuardadas = JSON.parse(localStorage.getItem('notasTutor') || '{}')
    comentarios.value = notasGuardadas[usuario.value] || []
  }
})

function guardarComentario() {
  if (!nuevoComentario.value.trim()) {
    alert('Escribe algo antes de enviar.')
    return
  }

  const notas = JSON.parse(localStorage.getItem('notasTutor') || '{}')
  notas[usuario.value] = notas[usuario.value] || []
  notas[usuario.value].push(nuevoComentario.value.trim())
  localStorage.setItem('notasTutor', JSON.stringify(notas))

  comentarios.value.push(nuevoComentario.value.trim())
  nuevoComentario.value = ''
}
</script>

<style scoped>
.contenido {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f4f4;
  padding: 2rem;
}

.comentarios-box {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  color: #2d4225;
  margin-bottom: 0.5rem;
}

p, label {
  color: #333;
}

input {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s;
}
button:hover {
  background-color: #3e8e41;
}

.historial {
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
}
.historial h3 {
  margin-bottom: 0.5rem;
  color: #112712;
}
.historial ul {
  padding-left: 1rem;
  color: #112712;
}
.historial li {
  margin-bottom: 0.3rem;
}
</style>
