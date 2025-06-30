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
          :class="{ today: isToday(day) }"
          @click="selectDay(day)"
        >
          <span>{{ day }}</span>
          <div v-if="getEventsForDay(day).length" class="event-dot"></div>
        </div>
      </div>
    </div>

    <div v-if="selectedDay" class="event-modal">
      <h3>Eventos para {{ selectedDay }}/{{ month + 1 }}/{{ year }}</h3>
      <ul>
        <li v-for="(ev, idx) in getEventsForDay(selectedDay)" :key="idx">
          {{ ev }}
        </li>
      </ul>
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
import navbar from '@/components/navbar.vue'
const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())
const selectedDay = ref(null)
const newEvent = ref('')

// Cargar eventos de localStorage
const events = ref(JSON.parse(localStorage.getItem('eventosCalendario') || '{}'))

const daysInMonth = computed(() => {
  return new Date(year.value, month.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(year.value, month.value, 1).getDay()
})

function isToday(day) {
  return (
    day === today.getDate() &&
    month.value === today.getMonth() &&
    year.value === today.getFullYear()
  )
}

function selectDay(day) {
  selectedDay.value = day
  newEvent.value = ''
}

function getEventsForDay(day) {
  const key = `${year.value}-${month.value + 1}-${day}`
  return events.value[key] || []
}

function addEvent() {
  const key = `${year.value}-${month.value + 1}-${selectedDay.value}`
  if (!events.value[key]) events.value[key] = []
  events.value[key].push(newEvent.value)
  localStorage.setItem('eventosCalendario', JSON.stringify(events.value))
  newEvent.value = ''
}

function prevMonth() {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else {
    month.value--
  }
  selectedDay.value = null
}

function nextMonth() {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
  selectedDay.value = null
}

// Actualiza localStorage si los eventos cambian
watch(events, (val) => {
  localStorage.setItem('eventosCalendario', JSON.stringify(val))
}, { deep: true })
</script>

<style scoped>
h2 {
    text-align: center;
    color: #9bb055;
    margin-bottom: 1rem;
    font-weight: bold;
}
.calendar-container {
  margin-top: 500px;
  position:absolute;
  top: 15%;
  left:37%;
  width: 100%;
  
  max-width: 400px;
  margin: 2rem auto;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #9bb055;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.calendar-day {
  background: #fff;
  border-radius: 6px;
  min-height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  cursor: pointer;
  position: relative;
  border: 1px solid     #000000;
  font-size: 15px;
  color: black;
}
.calendar-day.header {
  background: #9bb055;
  color: #fff;
  font-weight: bold;
  cursor: default;
}
.calendar-day.today {
  border: 2px solid #3c763d;
}
.calendar-day.blank {
  background: transparent;
  border: none;
  cursor: default;
}
.event-dot {
  width: 8px;
  height: 8px;
  background: #3c763d;
  border-radius: 50%;
  margin-top: 2px;
}
.event-modal {
  margin-top: 1.5rem;
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.event-modal h3 {
  margin-top: 0;
}
.event-modal ul {
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}
.event-modal input {
  width: 60%;
  padding: 0.3rem;
  margin-right: 0.5rem;
}
.event-modal button {
  margin-right: 0.5rem;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 4px;
  background: #9bb055;
  color: #fff;
  cursor: pointer;
}
.event-modal button[type="button"] {
  background: #ccc;
  color: #333;
}
</style>