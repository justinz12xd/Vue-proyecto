// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import home from '../components/home.vue'
import Register from '../components/Register.vue'
import dashboard from '../components/dashboard.vue'
import login from '../components/login.vue'
import perfil from '../components/perfil.vue'

const routes = [
    { path: '/', component: App },
    { path: '/home', component: home },
    { path: '/register', component: Register },
    { path: '/dashboard', component: dashboard },
    { path: '/login', component: login },
    { path: '/perfil', component: perfil }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
