<template>
  <div class="calendar-container">
    <h2>Calendario</h2>
    <div class="calendar">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <span>{{ monthNames[month] }} {{ year }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="calendar-grid">
        <div class="calendar-day header" v-for="d in days" :key="d">{{ d }}</div>
        <div
          v-for="blank in firstDayOfMonth"
          :key="'blank-' + blank"
          class="calendar-day blank"
        ></div>
        <div
          v-for="day in daysInMonth"
          :key="day"
          class="calendar-day"
          :class="{ 
            today: isToday(day), 
            hasMedical: hasMedicalAppointment(day),
            hasEvent: getEventsForDay(day).length > 0
          }"
          @click="selectDay(day)"
        >
          <span>{{ day }}</span>
          <div v-if="hasMedicalAppointment(day)" class="medical-dot"></div>
          <div v-if="getEventsForDay(day).length > 0" class="event-dot"></div>
          
        </div>
      </div>
      <button type="button" class="volver" @click="volver">Volver</button>
    </div>

    <div v-if="selectedDay" class="event-modal">
      <h3>Eventos para {{ selectedDay }}/{{ month + 1 }}/{{ year }}</h3>
      <div class="events-list">
        <!-- Eventos médicos -->
        <div v-if="medicalAppointmentsForDay(selectedDay).length > 0" class="medical-section">
          <h4>Citas Médicas:</h4>
          <ul>
            <li v-for="(appointment, idx) in medicalAppointmentsForDay(selectedDay)" :key="idx">
              <strong>{{ appointment.hora }}</strong> - {{ appointment.tipo }}
            </li>
          </ul>
        </div>

        <!-- Otros eventos -->
        <div v-if="getEventsForDay(selectedDay).length > 0" class="other-events">
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

<style scoped>
.volver{
  background-color: #4CAF50;
  max-width: 450%;
  color: white;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;

}
.calendar-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 6rem;
  justify-content: center;
  align-items: center;

}
h2 {
  margin-bottom: 1rem;
  color: #9bb055;
  font-weight: bold;  
  font-size: 1.5rem;
}

.calendar {
  background: white;
  padding: 4rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 4px;
  color: black  ;
  font-weight: bold;
  font-size: 1.2rem;  
}

.calendar-header button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  color: #9bb055;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-day {
  padding: 0.5rem;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.calendar-day.header {
  font-weight: bold;
  color: #666;
}

.calendar-day.blank {
  opacity: 0;
}

.calendar-day.today {
  background-color: #e3f2fd;
}

.calendar-day.hasMedical {
  background-color: #e8f5e9;
}

.calendar-day.hasEvent {
  background-color: #f5f5f5;
}

.calendar-day:hover {
  background-color: #f5f5f5;
}

.calendar-day span {
  display: block;
  margin-bottom: 0.5rem;
  color: #9bb055;
  font-weight: bold;
  font-size: 1.2rem;
}

.event-dot {
  width: 8px;
  height: 8px;
  background-color: #4CAF50;
  border-radius: 50%;
  margin: 0 auto;
}

.medical-dot {
  width: 8px;
  height: 8px;
  background-color: #2196F3;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 0.2rem;
}

.event-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
  width: 90%;
  max-width: 600px;
}

.event-modal h3 {
  margin-top: 0;
  color: #515e28;
  font-weight: bold;
}

.events-list {
  margin-bottom: 1rem;
}

.medical-section, .other-events {
  margin-bottom: 1rem;
}

.medical-section h4, .other-events h4 {
  color: #333;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.medical-section ul, .other-events ul {
  padding-left: 1.2rem;
}

.medical-section li, .other-events li {
  margin-bottom: 0.5rem;
  color: #333;
}

.medical-section li strong {
  color: #2196F3;
}

.event-modal input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.event-modal button {
  margin-right: 0.5rem;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 4px;
  background: #9bb055;
  color: white;
  cursor: pointer;
}

.event-modal button[type="button"] {
  background: #ccc;
  color: #333;
  margin-top: 0.5rem;  
  width: 50%;
  margin-left: 25%;
}

.event-modal button:hover {
  opacity: 0.9;
}
</style>