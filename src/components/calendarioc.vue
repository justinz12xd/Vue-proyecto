<template>
  <div class="caja-calendario">
    <h2>Calendario</h2>
    <div class="calendario">
      <div class="cabecera-calendario">
        <button @click="prevMonth">&lt;</button>
        <span>{{ monthNames[month] }} {{ year }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="rejilla-calendario">
        <div class="dia-calendario header" v-for="d in days" :key="d">{{ d }}</div>
        <div
          v-for="blank in firstDayOfMonth"
          :key="'blank-' + blank"
          class="dia-calendario vacio"
        ></div>
        <div
          v-for="day in daysInMonth"
          :key="day"
          class="dia-calendario"
          :class="{ 
            hoy: isToday(day), 
            'tiene-cita': hasMedicalAppointment(day),
            'tiene-evento': getEventsForDay(day).length > 0
          }"
          @click="selectDay(day)"
        >
          <span>{{ day }}</span>
          <div v-if="hasMedicalAppointment(day)" class="punto-medico"></div>
          <div v-if="getEventsForDay(day).length > 0" class="punto-evento"></div>
          
        </div>
      </div>
      <button type="button" class="volver" @click="volver">Volver</button>
    </div>

    <div v-if="selectedDay" class="ventana-evento">
      <h3>Eventos para {{ selectedDay }}/{{ month + 1 }}/{{ year }}</h3>
      <div class="lista-eventos">
        <!-- Eventos médicos -->
        <div v-if="medicalAppointmentsForDay(selectedDay).length > 0" class="seccion-medica">
          <h4>Citas Médicas:</h4>
          <ul>
            <li v-for="(appointment, idx) in medicalAppointmentsForDay(selectedDay)" :key="idx">
              <strong>{{ appointment.hora }}</strong> - {{ appointment.tipo }}
            </li>
          </ul>
        </div>

        <!-- Otros eventos -->
        <div v-if="getEventsForDay(selectedDay).length > 0" class="otros-eventos">
          <h4>Otros Eventos:</h4>
          <ul>
            <li v-for="(ev, idx) in getEventsForDay(selectedDay)" :key="idx">
              {{ ev }}
            </li>
          </ul>
        </div>
      </div>
      <form @submit.prevent="addEvent">
        <input v-model="newEvent" placeholder="Nuevo evento" required />
        <button type="submit">Agregar</button>
        <button type="button" @click="selectedDay = null">Cerrar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import '../style/calendario.css'

const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const router = useRouter()
const volver=()=>{
  router.push('/dashboard')
}
const month = ref(new Date().getMonth())
const year = ref(new Date().getFullYear())
const selectedDay = ref(null)
const newEvent = ref('')
const events = ref(JSON.parse(localStorage.getItem('eventosCalendario') || '{}'))

// Obtener citas médicas del localStorage
const citasMedicas = computed(() => {
  return JSON.parse(localStorage.getItem('citas') || '[]')
})

const firstDayOfMonth = computed(() => {
  const date = new Date(year.value, month.value, 1)
  return date.getDay()
})

const daysInMonth = computed(() => {
  return new Date(year.value, month.value + 1, 0).getDate()
})

const isToday = (day) => {
  const today = new Date()
  return today.getDate() === day &&
         today.getMonth() === month.value &&
         today.getFullYear() === year.value
}

const selectDay = (day) => {
  selectedDay.value = day
}

// Verificar si hay citas médicas para el día
const hasMedicalAppointment = (day) => {
  const date = `${year.value}-${padZero(month.value + 1)}-${padZero(day)}`
  return citasMedicas.value.some(appointment => appointment.fecha === date)
}

// Obtener citas médicas para el día seleccionado
const medicalAppointmentsForDay = (day) => {
  const date = `${year.value}-${padZero(month.value + 1)}-${padZero(day)}`
  return citasMedicas.value.filter(appointment => appointment.fecha === date)
}

const getEventsForDay = (day) => {
  const date = `${year.value}-${padZero(month.value + 1)}-${padZero(day)}`
  return events.value[date] || []
}

const addEvent = () => {
  if (!newEvent.value.trim()) return

  const date = `${year.value}-${padZero(month.value + 1)}-${padZero(selectedDay.value)}`
  events.value[date] = [...(events.value[date] || []), newEvent.value]
  newEvent.value = ''
  selectedDay.value = null
}

const prevMonth = () => {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else {
    month.value--
  }
}

const nextMonth = () => {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
}

// Actualiza localStorage si los eventos cambian
watch(events, (val) => {
  localStorage.setItem('eventosCalendario', JSON.stringify(val))
}, { deep: true })

const padZero = (num) => num.toString().padStart(2, '0')
</script>