<template>
    <Navbar />
    <div class="caja">
        <h1>Mi Perfil</h1>
        <p class="saludo">Bienvenido a tu perfil</p>
        
        <div class="mis-datos">
            <div class="dato">
                <strong>Nombre:</strong> {{ nombre || 'No especificado' }}
            </div>
            <div class="dato">
                <strong>Facultad:</strong> {{ facultad || 'No especificado' }}
            </div>
            <div class="dato">
                <strong>Discapacidad:</strong> {{ discapacidad || 'No especificado' }}
            </div>
            <div class="dato">
                <strong>Teléfono:</strong> {{ telefono || 'No especificado' }}
            </div>
            <div class="dato">
                <strong>Dirección:</strong> {{ direccion || 'No especificado' }}
            </div>
        </div>
        
        <div class="botones">
            <router-link to="/editar_perfil">
                <button class="boton-editar">Editar Perfil</button>
            </router-link>
            <router-link to="/dashboard">
                <button class="boton-volver">Volver al Dashboard</button>
            </router-link>
        </div>
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
.caja {
    background-color: #e5f4d4;
    width: 70vw;
    max-width: 800px;
    min-height: 400px;
    margin: 4rem auto;
    border-radius: 15px;
    padding: 3rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #9bb055;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.saludo {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    text-align: center;
}

.mis-datos {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem 0;
}

.dato {
    color: #333;
    font-size: 1.1rem;
    text-align: left;
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(155, 176, 85, 0.2);
}

.dato:last-child {
    border-bottom: none;
}

.dato strong {
    color: #9bb055;
    display: inline-block;
    width: 120px;
    font-weight: bold;
}

.botones {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.botones a {
    text-decoration: none;
}

.boton-editar,
.boton-volver {
    background-color: #9bb055;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 160px;
}

.boton-volver {
    background-color: #7a9142;
}

.boton-editar:hover {
    background-color: #7a9142;
    transform: translateY(-2px);
}

.boton-volver:hover {
    background-color: #6b7f3a;
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
    .caja {
        width: 90vw;
        padding: 2rem 1.5rem;
        margin: 2rem auto;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .dato strong {
        width: 100px;
        font-size: 1rem;
    }
    
    .botones {
        flex-direction: column;
        align-items: center;
    }
    
    .boton-editar,
    .boton-volver {
        width: 200px;
    }
}
</style>
