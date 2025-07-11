<template>
    <Navbar />
    <div class="contenedor">
        <h1>Perfil</h1>
        <p>Bienvenido a tu perfil</p>
        <p>Nombre:  {{ nombre }}</p>
        <p>Facultad:  {{ facultad }}</p>
        <p>Discapacidad:  {{ discapacidad }}</p>
        <p>Telefono:  {{ telefono }}</p>
        <p>Direccion:  {{ direccion }}</p>
        <router-link to="/editar_perfil"><button>Editar Perfil</button></router-link>
    </div>
</template>
<script setup> 
import { ref, onMounted } from 'vue'
import Navbar from '@/components/navbar.vue'
const nombre = ref('')
const facultad = ref('')
const discapacidad = ref('')
const telefono = ref('')
const direccion = ref('')

onMounted(() => {
  const usuarioActual = localStorage.getItem('usuarioActual')
  const cuentas = JSON.parse(localStorage.getItem('cuentas') || '{}')
  const usuario = cuentas[usuarioActual] || {}
  nombre.value = usuario.nombre || ''
  facultad.value = usuario.facultad || ''
  discapacidad.value = usuario.discapacidad || ''
  telefono.value = usuario.telefono || ''
  direccion.value = usuario.direccion || ''
})
</script>
<style scoped>

.contenedor {
    background-color: #e5f4d4;
    width: 60vw;
    min-height: 200px;
    margin: 2rem auto;
    border-radius: 12px;
    padding: 6rem;
    text-align: center;
    margin-top: 8rem;
    
}
h1 {
    color: #9bb055;
    text-align: center;
    font-size: 2rem;
    
}
p {
    color: #000000;
    font-size: 1rem;
    text-align: left;
}
button{
    background-color: #9bb055;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 2rem 2rem;
    font-size: 1em;
    margin-top: 1rem;
    cursor: pointer;
    transition: background 0.2s;

}
</style>
