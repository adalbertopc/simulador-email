const para = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formularioEnviar = document.querySelector("#enviar-mail");
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", inicioApp);
  para.addEventListener("blur", validarCampo);
  asunto.addEventListener("blur", validarCampo);
  mensaje.addEventListener("blur", validarCampo);

  formularioEnviar.addEventListener("submit", enviarCorreo);

  btnReset.addEventListener("click", e => {
    formularioEnviar.reset();
    e.preventDefault();
  });
}

function inicioApp() {
  btnEnviar.disabled = true;
}

function validarCampo() {
  validarLongitud(this);

  if (this.type === "email") {
    const correo = this.value.indexOf("@");
    if (correo !== -1) {
      this.style.borderBottomColor = "green";
      this.classList.remove("error");
    } else {
      this.style.borderBottomColor = "red";
      this.classList.add("error");
    }
  }

  let errores = document.querySelectorAll(".error");
  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

function validarLongitud(campo) {
  console.log(campo);
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}

function enviarCorreo(e) {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";
  const enviado = document.createElement("img");
  enviado.src = "img/mail.gif";
  enviado.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    document.querySelector("#loaders").appendChild(enviado);

    setTimeout(() => {
      enviado.remove();
      formularioEnviar.reset();
    }, 4000);
  }, 3000);

  e.preventDefault();
}
