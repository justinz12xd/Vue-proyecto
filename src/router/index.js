// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import home from '../views/home.vue'
import Register from '../views/Register.vue'
import dashboard from '../views/dashboard.vue'
import login from '../views/Login.vue'
import perfil from '../views/perfil.vue'
import calendario from '../views/calendario.vue'
const routes = [
    // { path: '/', component: App },
    { path: '/', component: home },
    { path: '/registro', component: Register },
    { path: '/dashboard', component: dashboard },
    { path: '/login',component: login },
    { path: '/perfil', component: perfil },
    { path: '/calendario', component: calendario }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
