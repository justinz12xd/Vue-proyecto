// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import home from '../components/home.vue'
import Register from '../components/Register.vue'
import dashboard from '../components/dashboard.vue'

const routes = [
    { path: '/', component: App },
    { path: '/home', component: home },
    { path: '/register', component: Register },
    { path: '/dashboard', component: dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
