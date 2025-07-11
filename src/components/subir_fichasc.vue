<template>
  <Navbar />
  <div class="cabecera">
    <h1>Subir Fichas Médicas</h1>
    <p>Sube tu archivo PDF, una descripción y la fecha correspondiente.</p>
  </div>
  <div class="subir-fichas">
    <h2>Formulario</h2>
    <input id="input-pdf" type="file" accept=".pdf" @change="handleFileChange" />
    <textarea v-model="descripcion" placeholder="Descripción de la ficha"></textarea>
    <input type="date" v-model="fecha" />
    <button @click="subirFicha">Subir Ficha</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './navbar.vue'

const descripcion = ref('')
const fecha = ref('')
const archivo = ref(null)

function handleFileChange(e) {
  const file = e.target.files[0]
  if (file && file.type !== 'application/pdf') {
    alert('Solo se aceptan archivos PDF')
    archivo.value = null
    return
  }
  archivo.value = file
}

function subirFicha() {
  const usuario = (localStorage.getItem('usuarioActual') || '').trim()
  if (!usuario) return alert('Usuario no autenticado')
  if (!archivo.value || !descripcion.value || !fecha.value) return alert('Completa todos los campos')

  const reader = new FileReader()
  reader.onload = () => {
    const fichas = JSON.parse(localStorage.getItem('fichasMedicas') || '{}')
    fichas[usuario] = fichas[usuario] || []
    fichas[usuario].push({
      nombre: archivo.value.name,
      descripcion: descripcion.value,
      fecha: fecha.value,
      archivo: reader.result
    })
    localStorage.setItem('fichasMedicas', JSON.stringify(fichas))
    alert('Ficha subida correctamente')

    // Limpiar formulario
    descripcion.value = ''
    fecha.value = ''
    archivo.value = null
    document.getElementById('input-pdf').value = ''
  }
  reader.readAsDataURL(archivo.value)
}
</script>

<style scoped>
.cabecera {
  text-align: center;
  margin-top: 2rem;
}
.subir-fichas {
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
textarea, input[type="date"] {
  width: 100%;
  padding: 0.5rem;
}
button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
