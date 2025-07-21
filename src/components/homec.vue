<template>
  <Background />
  <Navbar />

  <section class="hero-section">
    <div class="hero-content">
      <div class="logo-container">
        <img class="main-logo" src="@/assets/logo.png" alt="Logo ULEAM Capacidades" />
      </div>
      <div class="hero-text">
        <h1 class="hero-title">Bienvenido a ULEAM Capacidades</h1>
        <p class="hero-subtitle">Construyendo un futuro inclusivo donde cada persona tiene la oportunidad de brillar</p>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">¿Quiénes Somos?</h2>
        <p class="section-subtitle">Conoce nuestra misión, visión y compromiso con la inclusión</p>
      </div>
      
      <div class="cards-grid">
        <div class="info-card mission">
          <div class="card-icon green">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>MISIÓN</h3>
            <p>Brindar un espacio y recursos inclusivos para la comunidad con Capacidades Especiales, garantizando una experiencia universitaria plena y enriquecedora.</p>
          </div>
        </div>

        <div class="info-card vision">
          <div class="card-icon purple">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>VISIÓN</h3>
            <p>Ser una universidad líder en inclusión, promoviendo la igualdad de oportunidades y el respeto a la diversidad en la educación superior.</p>
          </div>
        </div>

        <div class="info-card team">
          <div class="card-icon orange">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.98 3.67C11.8 12.9 11.4 13 11 13s-.8-.1-1.01-.34L7.01 8.99C6.54 8.37 5.8 8 5 8H3.46c-.8 0-1.53.5-1.83 1.25L0 16.5V22h2v-5h2.5l1.5 5h13V22z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>NUESTRO EQUIPO</h3>
            <p>Un grupo comprometido de estudiantes y docentes trabajando para crear un entorno educativo accesible, acogedor y transformador.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="@/assets/logo.png" alt="Logo ULEAM Capacidades" class="footer-logo-img" />
        <p class="footer-tagline">Educación inclusiva para todos</p>
      </div>
      
      <div class="footer-section">
        <h3>Contacto</h3>
        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <div>
            <p>Av. Circunvalación Vía a San Mateo</p>
            <p>Manta - Manabí - Ecuador</p>
          </div>
        </div>
        
        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <p>info@uleam.edu.ec</p>
        </div>
        
        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="currentColor" class="contact-icon">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <p>+593 5 2620-480</p>
        </div>
      </div>
      
      <div class="footer-section">
        <h3>Horario de Atención</h3>
        <div class="schedule-item">
          <span class="schedule-days">Lunes a Viernes</span>
          <span class="schedule-time">08:00 - 17:00</span>
        </div>
        <div class="schedule-item">
          <span class="schedule-days">Sábados</span>
          <span class="schedule-time">09:00 - 13:00</span>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 ULEAM Capacidades. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import Navbar from '@/components/navbar2.vue';
import Background from '@/components/background.vue';
</script>

<style scoped>
html, body, #app {
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
  position: relative;
}


.hero-content {
  max-width: 1200px;
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 20px;
  height: 100%;
}

.logo-container {
  flex-shrink: 0;
  position: relative;
}

.main-logo {
  width: 280px;
  height: 280px;
  border-radius: 20px;
  object-fit: cover;
}


.hero-text {
  flex: 1;
  text-align: left;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000, #4ccd55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #000000;
  margin-bottom: 2.5rem;
  font-weight: 450;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
}


/* About Section */
.about-section {
  padding: 5rem 1rem;
  background: #f8f9fa;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  position: relative;
}


.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.info-card {
  background: rgb(232, 232, 232);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-top: 4px solid;
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
}

.card-icon svg {
  width: 32px;
  height: 32px;
  color: white;
}

.card-icon.green {
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}

.card-icon.purple {
  background: linear-gradient(135deg, #9C27B0, #BA68C8);
  box-shadow: 0 8px 20px rgba(156, 39, 176, 0.3);
}

.card-icon.orange {
  background: linear-gradient(135deg, #FF9800, #FFB74D);
  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);
}

.card-content h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.card-content p {
  color: #666;
  font-size: 1rem;
  line-height: 1.7;
}
/* Footer */
.site-footer {
  background: #1b2732;
  color: #ecf0f1;
  padding: 3rem 0 0;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.footer-logo {
  text-align: center;
}

.footer-logo-img {
  width: 120px;
  height: 120px;
  border-radius: 15px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.footer-tagline {
  font-style: italic;
  opacity: 0.8;
  margin: 0;
}

.footer-section h3 {
  color: #4CAF50;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: #4CAF50;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item p {
  margin: 0;
  line-height: 1.4;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #000101;
}

.schedule-days {
  font-weight: 500;
}

.schedule-time {
  color: #4CAF50;
  font-weight: 600;
}

.footer-bottom {
  text-align: center;
  padding: 2rem;
  background: #202c39;
  margin-top: 2rem;
  border-top: 1px solid #202c39;
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }

  .main-logo {
    width: 200px;
    height: 200px;
  }

  .hero-cta {
    justify-content: center;
  }

  .cta-button {
    flex: 1;
    min-width: 140px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-card {
    padding: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 1rem 3rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1.5rem;
  }

  .main-logo {
    width: 160px;
    height: 160px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}

/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-card {
  animation: fadeInUp 0.6s ease forwards;
}

.info-card:nth-child(1) { animation-delay: 0.1s; }
.info-card:nth-child(2) { animation-delay: 0.2s; }
.info-card:nth-child(3) { animation-delay: 0.3s; }

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus states for accessibility */
.cta-button:focus,
.info-card:focus {
  outline: 2px solid #4CAF50;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .hero-content {
    border: 2px solid #000;
  }
  
  .info-card {
    border: 2px solid #000;
  }
}
</style>