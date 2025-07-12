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

<style scoped>
.contenedor {
    background-color: #e5f4d4;
    width: 60vw;
    max-width: 600px;
    min-height: 200px;
    margin: 2rem auto;
    border-radius: 12px;
    padding: 6rem;
    text-align: center;
    margin-top: 8rem;
    
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #9bb055;
}

h2 {
    color: #9bb055;
    margin-bottom: 1rem;
    font-weight: bold;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
    max-width: 450px;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #3c763d;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}
button:hover {
  background-color: #2a5f2c;
}
select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>