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
import '../style/notas-tutor.css'

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
