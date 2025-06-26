<template>
  <Navbar />
    <div class="dashboard-container">
    <h1>Dashboard</h1>
    <p>Bienvenido al panel de control</p>
    <div class="content-box">
      <!-- Aquí se mostrarán los PDFs -->
      <iframe
        v-if="pdfUrl"
        :src="pdfUrl"
        width="100%"
        height="400px"
        frameborder="0"
      ></iframe>
      <p v-else>Sube un PDF para verlo aquí.</p>
      <input type="file" accept="application/pdf" @change="onFileChange" />
    </div>
  </div>
</template>
<script setup >
import { ref } from 'vue'
import Navbar from './navbar.vue'

const pdfUrl = ref(null)

function onFileChange(event) {
  const file = event.target.files[0]
  if (file && file.type === 'application/pdf') {
    pdfUrl.value = URL.createObjectURL(file)
  }
}
</script>
<style src="@/assets/navbar.css" scoped></style>
<style scoped>
p {
  color: #333;
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}
h1 {
  color: #9bb055;
  text-align: center;
  font-size: 35px;
}
.dashboard-container {
  margin-top: 50px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.content-box {
  background: #fff;
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 2rem;
  width: 90vw;
  max-width: 600px;
  min-height: 300px;
  margin: 2rem auto 0 auto; /* Centra horizontalmente */
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>