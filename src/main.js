import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//IMPORTANTE: Asegurarse de que esta linea exista, sin el router no se enlaza nada:'v 
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

