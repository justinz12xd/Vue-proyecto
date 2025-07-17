<template>
  <Background />
  <Navbar />
  <div class="container">
    <img class="Logo2" src="@/assets/logo.png" alt="Logo ULEAM Capacidades" />
    
    <div class="home">
      <h1>Bienvenido a ULEAM Capacidades</h1>
      <p>¡Bienvenido a nuestra plataforma de Capacidades Especiales.</p>
    </div>
  </div>
  <div class="quienes-somos">
    <h2>¿Quiénes somos?</h2>
    <div class="cards">
      <div class="card">
        <div class="icon green"></div>
        <h3>MISIÓN</h3>
        <p>
          Con esta pagina web, buscamos brindar un espacio y recursos para la comunidad con Capacidades Especiales, para brindarles una mejor experiencia en la Universidad
        </p>
      </div>
      <div class="card">
        <div class="icon purple"></div>
        <h3>VISIÓN</h3>
        <p>
          Ser una universidad inclusiva, que promueva la igualdad de oportunidades y el respeto a la diversidad, garantizando el acceso a la educación superior para todas las personas.
        </p>
      </div>
      <div class="card">
        <div class="icon orange"></div>
        <h3>¿QUIÉNES SOMOS?</h3>
        <p>
          Somos un grupo de estudiantes y docentes comprometidos con la inclusión y el apoyo a las personas con capacidades especiales, trabajando para crear un entorno educativo accesible y acogedor.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/navbar2.vue';
import Background from '@/components/background.vue';
</script>

<style scoped>





h1, p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: black;
  text-align: right;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e5f4d4;
  width: 70vw;
  height: 50vh;
  display: flex;  
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  z-index: 1;
} 
.home {
  text-align: right; 
  flex: 1;
  position: absolute;
  left: 40%;
  top: 45%;
}
.Logo2 {
  width: 200px;
  height: 200px;
  margin-right: 2rem;
  position: absolute;
  left: 20%;
  top: 12%;
}


.quienes-somos {
  margin-top: 60vh;
  padding: 2rem;
  text-align: center;
  background-color: #e5f4d4;
  font-family: Arial, Helvetica, sans-serif;
}

.quienes-somos h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  background: #e5f4d4;
  border: 1px solid #ddd;
  padding: 1.5rem;
  width: 300px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.green {
  background-color: #7bbf6a;
}

.purple {
  background-color: #a259d8;
}

.orange {
  background-color: #f39c12;
}

.card h3 {
  margin-top: 2rem;
  font-weight: bold;
  color: #111;
}

.card p {
  margin-top: 1rem;
  font-weight: normal;
  font-size: 0.95rem;
  color: #444;
  text-align: justify;
}
</style>
