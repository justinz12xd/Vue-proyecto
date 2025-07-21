<template>
    <div class="contenedor">
        <h2>Editar Perfil</h2>
        <form @submit.prevent="guardarCambios">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="usuario.nombre" required>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="usuario.password" required>
            <label for="facultad">Facultad:</label>
            <select id="facultad" v-model="usuario.facultad" required>
                <option value="" disabled selected>Seleccione su facultad</option>
                <option value="Ingeniería">Ingeniería</option>
                <option value="Ciencias Sociales">Ciencias Sociales</option>
                <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                <option value="Humanidades">Humanidades</option>
            </select>
            <label for="discapacidad">Discapacidad:</label>
            <select id="discapacidad" v-model="usuario.discapacidad" required>
                <option value="" disabled selected>Seleccione su discapacidad</option>
                <option value="Discapacidad Visual">Discapacidad Visual</option>
                <option value="Discapacidad Auditiva">Discapacidad Auditiva</option>
                <option value="Discapacidad Motriz">Discapacidad Motriz</option>
                <option value="Discapacidad Intelectual">Discapacidad Intelectual</option>
            </select>
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" v-model="usuario.telefono" required>
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" v-model="usuario.direccion" required>
            <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import '../style/editar-perfil.css'

const usuario = ref({
  nombre: '',
  password: '',
  facultad: '',
  discapacidad: '',
  telefono: '',
  direccion: ''
})

// Método para guardar cambios
const guardarCambios = () => {
  const usuarioActual = localStorage.getItem('usuarioActual')
  if (!usuarioActual) {
    alert('No hay usuario actual registrado')
    return
  }

  // Obtener las cuentas existentes
  let cuentas = JSON.parse(localStorage.getItem('cuentas') || '{}')

  // Actualizar la cuenta del usuario actual
  cuentas[usuarioActual] = {
    ...usuario.value
  }

  // Guardar las cuentas actualizadas
  localStorage.setItem('cuentas', JSON.stringify(cuentas))
  
  // Mostrar mensaje de éxito
  alert('Cambios guardados exitosamente!')
  
  // Redirigir al perfil
  window.location.href = '/perfil'
}

onMounted(() => {
  // Cargar datos del usuario actual si existen
  const usuarioActual = localStorage.getItem('usuarioActual')
  const cuentas = JSON.parse(localStorage.getItem('cuentas') || '{}')
  if (usuarioActual && cuentas[usuarioActual]) {
    usuario.value.nombre = cuentas[usuarioActual].nombre || ''
    usuario.value.password = cuentas[usuarioActual].password || ''
    usuario.value.facultad = cuentas[usuarioActual].facultad || ''
    usuario.value.discapacidad = cuentas[usuarioActual].discapacidad || ''
    usuario.value.telefono = cuentas[usuarioActual].telefono || ''
    usuario.value.direccion = cuentas[usuarioActual].direccion || ''    
  }
})
</script>