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

    // Crear el objeto de la cita
    const nuevaCita = {
        id: Date.now(), // Usar timestamp como ID único
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

<style scoped>
.agendar-cita {
    text-align: center;
    margin: 7rem auto; /* Cambia el valor según lo que necesites */
    width: 60vw;
    min-height: 200px;
    position: relative;
    z-index: 1;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 4rem;
    background-color: #e5f4d4;
}

.form-group {
    margin-bottom: 1rem;
    width: 50%;
    margin-left: 25%;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #9bb055;
    font-weight: bold;
}

input, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn-agendar {
    background-color: #3c763d;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 50%;
    margin-top: 1rem;
}

.btn-agendar:hover {
    background-color: #2a5f2c;
}
h1 {
    color: #2d4225;
    margin-bottom: 0.5rem;
}
h2 {
    color: #2d4225;
    margin-bottom: 0.5rem;
}
.mensaje {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
    background-color: #d4edda;
    color: #155724;
    font-weight: bold;
}
</style>
    
