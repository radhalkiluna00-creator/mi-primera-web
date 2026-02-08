document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const btnRegistro = document.getElementById("btnRegistro");
  const btnLogin = document.getElementById("btnLogin");

  btnRegistro.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  btnLogin.addEventListener("click", function () {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("loginNombre").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (nombre === "" || password === "") {
      alert("⚠️ Completa todos los campos");
      return;
    }

    window.location.href = "inicio.html";
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("regNombre").value.trim();
    let correo = document.getElementById("regCorreo").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if (nombre === "" || correo === "" || password === "") {
      alert("⚠️ Completa todos los campos");
      return;
    }

    alert("✅ Registro exitoso, ahora inicia sesión");

    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

}); // 
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnSaludar");

  boton.addEventListener("click", () => {
    alert("¡Hola! Gracias por visitar mi página 😄");
  });
});
