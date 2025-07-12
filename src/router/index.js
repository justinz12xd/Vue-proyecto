// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import home from '../views/home.vue'
import Register from '../views/Register.vue'
import dashboard from '../views/dashboard.vue'
import login from '../views/Login.vue'
import perfil from '../views/perfil.vue'
import calendario from '../views/calendario.vue'
import Subir_fichas from '@/views/subir_fichas.vue'
import Notas_tutor from '@/views/Notas_tutor.vue'
import EditarPerfil from '@/views/Editar-perfil.vue'
import AgendarCita from '@/views/Agendar.cita.vue'
const routes = [
    // { path: '/', component: App },
    { path: '/', component: home },
    { path: '/registro', component: Register },
    { path: '/dashboard', component: dashboard },
    { path: '/login',component: login },
    { path: '/perfil', component: perfil },
    { path: '/calendario', component: calendario },
    { path: '/subir-fichas', component: Subir_fichas },
    {path: '/notastutor', component: Notas_tutor},
    { path: '/editar_perfil', component: EditarPerfil },
    { path: '/agendar_cita', component: AgendarCita }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
