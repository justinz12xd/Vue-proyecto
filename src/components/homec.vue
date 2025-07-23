<template>
  <Background />
  <Navbar />

  <section class="seccion-principal">
    <div class="contenido-principal">
      <div class="contenedor-logo">
        <img class="logo-principal" src="@/assets/logo.png" alt="Logo ULEAM Capacidades" />
      </div>
      <div class="texto-principal">
        <h1 class="titulo-principal">Bienvenido a ULEAM Capacidades</h1>
        <p class="subtitulo-principal">Construyendo un futuro inclusivo donde cada persona tiene la oportunidad de brillar</p>
      </div>
    </div>
  </section>

  <section class="seccion-acerca">
    <div class="contenedor-seccion">
      <div class="cabecera-seccion">
        <h2 class="titulo-seccion">¿Quiénes Somos?</h2>
        <p class="subtitulo-seccion">Conoce nuestra misión, visión y compromiso con la inclusión</p>
      </div>
      
      <div class="rejilla-tarjetas">
        <div class="tarjeta-informacion mision">
          <div class="icono-tarjeta verde">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div class="contenido-tarjeta">
            <h3>MISIÓN</h3>
            <p>Brindar un espacio y recursos inclusivos para la comunidad con Capacidades Especiales, garantizando una experiencia universitaria plena y enriquecedora.</p>
          </div>
        </div>

        <div class="tarjeta-informacion vision">
          <div class="icono-tarjeta morado">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </div>
          <div class="contenido-tarjeta">
            <h3>VISIÓN</h3>
            <p>Ser una universidad líder en inclusión, promoviendo la igualdad de oportunidades y el respeto a la diversidad en la educación superior.</p>
          </div>
        </div>

        <div class="tarjeta-informacion equipo">
          <div class="icono-tarjeta naranja">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.98 3.67C11.8 12.9 11.4 13 11 13s-.8-.1-1.01-.34L7.01 8.99C6.54 8.37 5.8 8 5 8H3.46c-.8 0-1.53.5-1.83 1.25L0 16.5V22h2v-5h2.5l1.5 5h13V22z"/>
            </svg>
          </div>
          <div class="contenido-tarjeta">
            <h3>NUESTRO EQUIPO</h3>
            <p>Un grupo comprometido de estudiantes y docentes trabajando para crear un entorno educativo accesible, acogedor y transformador.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="pie-sitio">
    <div class="contenido-pie">
      <div class="logo-pie">
        <img src="@/assets/logo.png" alt="Logo ULEAM Capacidades" class="imagen-logo-pie" />
        <p class="eslogan-pie">Educación inclusiva para todos</p>
      </div>
      
      <div class="seccion-pie">
        <h3>Contacto</h3>
        <div class="elemento-contacto">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icono-contacto">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <div>
            <p>Av. Circunvalación Vía a San Mateo</p>
            <p>Manta - Manabí - Ecuador</p>
          </div>
        </div>
        
        <div class="elemento-contacto">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icono-contacto">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <p>info@uleam.edu.ec</p>
        </div>
        
        <div class="elemento-contacto">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icono-contacto">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <p>+593 5 2620-480</p>
        </div>
      </div>
      
      <div class="seccion-pie">
        <h3>Horario de Atención</h3>
        <div class="elemento-horario">
          <span class="dias-horario">Lunes a Viernes</span>
          <span class="tiempo-horario">08:00 - 17:00</span>
        </div>
        <div class="elemento-horario">
          <span class="dias-horario">Sábados</span>
          <span class="tiempo-horario">09:00 - 13:00</span>
        </div>
      </div>
    </div>
    
    <div class="fondo-pie">
      <p>&copy; 2025 ULEAM Capacidades. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import Navbar from '@/components/navbar2.vue';
import Background from '@/components/background.vue';
import '../style/home.css'
</script>