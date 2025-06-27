document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.getElementById("form-registro");
  const mensaje = document.getElementById("mensaje");

  formRegistro.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("reg-nombre").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const facultad = document.getElementById("reg-facultad").value.trim();
    const discapacidad = document.getElementById("reg-discapacidad").value.trim();

    // Cargar cuentas existentes del localStorage
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || {};

    // Verificar si el correo ya existe
    if (cuentas[email]) {
      mensaje.textContent = "Este correo ya está registrado.";
      mensaje.style.color = "red";
      return;
    }

    // Guardar la nueva cuenta
    cuentas[email] = {
      nombre,
      password,
      facultad,
      discapacidad
    };

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    localStorage.setItem("usuarioActual", email); // Para saber quién está logueado

    mensaje.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
    mensaje.style.color = "green";
    formRegistro.reset();

    // Opcional: redirigir al login o dashboard después de unos segundos
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  });
});