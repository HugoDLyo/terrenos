//* Variables
const lado = document.querySelector("#lado");
const primerCosto = document.querySelector("#primer-costo");

const altura = document.querySelector("#altura");
const base = document.querySelector("#base");
const segundoCosto = document.querySelector("#segundo-costo");

const btnCalcular = document.querySelector("#calcular");
const btnResetFormulario = document.querySelector("#limpiar");

let terrenoA;
let terrenoB;

//* Evento al abrir la página
document.addEventListener("DOMContentLoaded", function () {
  btnCalcular.addEventListener("click", comparar);
  btnResetFormulario.addEventListener("click", resetFormulario);
});

//* Mensajes si los Input estan vacios
lado.addEventListener("blur", () => {
  elimiarMensajes();
  if (lado.value === "") {
    mostrarMensajes("error", "Este campo no debe ir vacio", 3000);
    lado.classList.add("vacio");
  } else {
    lado.classList.remove("vacio");
  }
});
primerCosto.addEventListener("blur", () => {
  elimiarMensajes();
  if (primerCosto.value === "") {
    mostrarMensajes("error", "Este campo no debe ir vacio", 3000);
    primerCosto.classList.add("vacio");
  } else {
    primerCosto.classList.remove("vacio");
  }
});
altura.addEventListener("blur", () => {
  elimiarMensajes();
  if (altura.value === "") {
    mostrarMensajes("error", "Este campo no debe ir vacio", 3000);
    altura.classList.add("vacio");
  } else {
    altura.classList.remove("vacio");
  }
});
base.addEventListener("blur", () => {
  elimiarMensajes();
  if (base.value === "") {
    mostrarMensajes("error", "Este campo no debe ir vacio", 3000);
    base.classList.add("vacio");
  } else {
    base.classList.remove("vacio");
  }
});
segundoCosto.addEventListener("blur", () => {
  elimiarMensajes();
  if (segundoCosto.value === "") {
    mostrarMensajes("error", "Este campo no debe ir vacio", 3000);
    segundoCosto.classList.add("vacio");
  } else {
    segundoCosto.classList.remove("vacio");
  }
});

//* Funciones de Comparación y Validación
function comparar() {
  if (
    lado.value === "" ||
    primerCosto.value === "" ||
    altura.value === "" ||
    base.value === "" ||
    segundoCosto === ""
  ) {
    elimiarMensajes();
    mostrarMensajes("alerta", "Faltan campos por llenar", 3000);
  } else if (altura.value >= base.value) {
    elimiarMensajes();
    mostrarMensajes(
      "alerta",
      "La Altura no puede ser igual o mayor a la Base",
      3000
    );
  } else {
    terrenoA = lado.value * lado.value * primerCosto.value;
    terrenoB = base.value * altura.value * segundoCosto.value;

    valoresTerrenos();
  }
}

function valoresTerrenos() {
  if (terrenoA === terrenoB) {
    mostrarMensajesExito(
      `Ambos tienen el mismo valor, su precio es de: $${terrenoA}`,
      8000
    );
  } else if (terrenoA > terrenoB) {
    mostrarMensajesExito(
      `El Precio: $${terrenoB} del Terreno B es menor al Precio: $${terrenoA} del Terreno A `,
      8000
    );
  } else {
    mostrarMensajesExito(
      `El Precio: $${terrenoA} del Terreno A es menor al Precio: $${terrenoB} del Terreno B `,
      8000
    );
  }
}

//* ===Función de mensajes (alerta y error)
function mostrarMensajes(clase, alerta, time) {
  const mensaje = document.createElement("P");
  mensaje.classList.add("mensaje", clase);
  mensaje.textContent = alerta;

  const comparacion = document.querySelector(".comparacion");
  comparacion.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, time);
}

//* ===Función de mensajes (alerta y error)
function mostrarMensajesExito(alerta, time) {
  const mensaje = document.createElement("P");
  mensaje.classList.add("mensaje", "exito");
  mensaje.textContent = alerta;

  const comparacion = document.querySelector(".comparacion");
  comparacion.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
    resetFormulario();
  }, time);
}

//* ===Eliminar los mensajes de alerta
function elimiarMensajes() {
  const comparacion = document.querySelector(".comparacion");
  while (comparacion.firstChild) {
    comparacion.removeChild(comparacion.firstChild);
  }
}

//* ===Función Limpiar los input
function resetFormulario() {
  const formulario = document.querySelector("#formulario");
  formulario.reset();

  if (
    lado.classList.contains("vacio") ||
    primerCosto.classList.contains("vacio") ||
    base.classList.contains("vacio") ||
    altura.classList.contains("vacio") ||
    segundoCosto.classList.contains("vacio")
  ) {
    lado.classList.remove("vacio");
    primerCosto.classList.remove("vacio");
    base.classList.remove("vacio");
    altura.classList.remove("vacio");
    segundoCosto.classList.remove("vacio");
  }

  elimiarMensajes();
}
