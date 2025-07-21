<template>
  <Navbar />
  <div class="cabecera">
    <h1>Subir Fichas Médicas</h1>
    <p>Sube tu archivo PDF, una descripción y la fecha correspondiente.</p>
  </div>
  <div class="subir-fichas">
    <h2>Subir Ficha</h2>
    <input
      id="input-pdf"
      type="file"
      accept=".pdf"
      @change="handleFileChange"
    />
    <textarea
      v-model="descripcion"
      placeholder="Descripción de la ficha"
    ></textarea>
    <input type="date" v-model="fecha" />
    <button @click="subirFicha">Subir Ficha</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./navbar.vue";
import '../style/subir-fichas.css'

const descripcion = ref("");
const fecha = ref("");
const archivo = ref(null);

function handleFileChange(e) {
  const file = e.target.files[0];
  if (file && file.type !== "application/pdf") {
    alert("Solo se aceptan archivos PDF");
    archivo.value = null;
    return;
  }
  archivo.value = file;
}

function subirFicha() {
  const usuario = (localStorage.getItem("usuarioActual") || "").trim();
  if (!usuario) return alert("Usuario no autenticado");
  if (!archivo.value || !descripcion.value || !fecha.value)
    return alert("Completa todos los campos");

  const reader = new FileReader();
  reader.onload = () => {
    const fichas = JSON.parse(localStorage.getItem("fichasMedicas") || "{}");
    fichas[usuario] = fichas[usuario] || [];
    fichas[usuario].push({
      nombre: archivo.value.name,
      descripcion: descripcion.value,
      fecha: fecha.value,
      archivo: reader.result,
    });
    localStorage.setItem("fichasMedicas", JSON.stringify(fichas));
    alert("Ficha subida correctamente");

    // Limpiar formulario
    descripcion.value = "";
    fecha.value = "";
    archivo.value = null;
    document.getElementById("input-pdf").value = "";
  };
  reader.readAsDataURL(archivo.value);
}
</script>
