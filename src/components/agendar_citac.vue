<template>
    <div class="agendar-cita">
        <h1>Agendar Cita</h1>
        <h2>En este espacio el tutor podrá agregar las citas médicas que el estudiante tenga programadas</h2>
        <form @submit.prevent="agendarCita">
            <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input 
                    type="date" 
                    id="fecha" 
                    v-model="fecha" 
                    :min="fechaMinima"
                    required
                >
            </div>
            <div class="form-group">
                <label for="hora">Hora:</label>
                <input 
                    type="time" 
                    id="hora" 
                    v-model="hora" 
                    required
                >
            </div>
            <div class="form-group">
                <label for="tipo">Tipo de Cita:</label>
                <select id="tipo" v-model="tipo" required>
                    <option value="" disabled selected>Seleccione el tipo de cita</option>
                    <option value="Consulta General">Consulta General</option>
                    <option value="Especialista">Especialista</option>
                    <option value="Laboratorio">Laboratorio</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <button type="submit" class="btn-agendar">Agendar</button>

        </form>
        <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import '../style/agendar-cita.css'

const fecha = ref('')
const hora = ref('')
const tipo = ref('')
const mensaje = ref('')
const route = useRoute()

// Calcular fecha mínima (hoy)
const fechaMinima = computed(() => {
    const hoy = new Date()
    return hoy.toISOString().split('T')[0]
})

// Obtener el ID del usuario actual
const usuarioId = localStorage.getItem('usuarioActual')

// Método para agendar la cita
const agendarCita = () => {
    if (!fecha.value || !hora.value || !tipo.value) {
        mensaje.value = 'Por favor, complete todos los campos'
        return
    }

    // Validar que la fecha no sea anterior al día actual
    const fechaSeleccionada = new Date(fecha.value)
    const hoy = new Date()
    if (fechaSeleccionada < hoy) {
        mensaje.value = 'No se puede agendar citas en fechas pasadas'
        return
    }

    const nuevaCita = {
        id: Date.now(), 
        fecha: fecha.value,
        hora: hora.value,
        tipo: tipo.value,
        usuarioId: usuarioId
    }

    // Obtener las citas existentes
    let citas = JSON.parse(localStorage.getItem('citas') || '[]')

    // Agregar la nueva cita
    citas.push(nuevaCita)

    // Guardar las citas actualizadas
    localStorage.setItem('citas', JSON.stringify(citas))

    // Limpiar el formulario
    fecha.value = ''
    hora.value = ''
    tipo.value = ''
    mensaje.value = 'Cita agendada exitosamente!'

    // Redirigir al calendario
    setTimeout(() => {
        window.location.href = '/calendario'
    }, 1500)
}
</script>
    
