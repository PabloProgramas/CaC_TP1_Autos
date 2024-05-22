let btn = document.getElementById("btn-header");
let nav = document.getElementById("nav-header");
let header = document.querySelector("header");

btn.onclick = () => {
  if (nav.style.display == "unset") {
    nav.style.display = "none";
  } else {
    nav.style.display = "unset";
  }
};

/* const autos = [
  { car: "BMW", imagen: "/img/bmw-m4-csl.jpg" },
  { car: "Audi", imagen: "/img/audi-a5-4.jpg" },
  { car: "Toyota", imagen: "/img/toyota-corolla-gr-sport-2024-0.jpg" },
  { car: "Fiat", imagen: "/img/157256.jpg" },
];

const contenedorElementos = document.getElementById("contenerdorAutos");

for (const elemento of autos) {
  const divElemento = document.createElement("div");
  divElemento.classList.add("elemento");

  const nombreParrafo = document.createElement("h3");
  nombreParrafo.textContent = elemento.car;

  const imagen = document.createElement("img");
  imagen.src = elemento.imagen;
  imagen.alt = elemento.car;

  divElemento.appendChild(imagen);
  divElemento.appendChild(nombreParrafo);
  contenedorElementos.appendChild(divElemento);
}
 */

//Seleccionamos el formulario por su ID
const formulario = document.getElementById("formulario");

//Seleccionamos todos los inputs y textareas dentro del formulario 
const inputs = document.querySelectorAll(
  "#formulario input, #formulario textarea"
);

//
const errores = document.querySelectorAll(".error");

//Agregamos el evento al formulario para manejar su envio 
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  //Variable para rastrear si hay errores en el formulario 
  let hayErrores = false;

  // Validacion de campos
  inputs.forEach((input) => {
    // Selecciona el mensaje de error correspondiente al input actual
    const error = document.querySelector(
      `#formulario .error[for="${input.id}"]`
    );
    //Comprobamos si el campo esta vacio
    if (input.value.trim() === "") {

      //si esta vacio, 'hayErrores' cambia a true
      hayErrores = true;
      alert("Faltan campos por completar"); //Mostramos las alertas
      error.style.display = "block";
    }
  });
  //si hay errores, mostramos la alerta y no se envia el formulario 
  if (hayErrores) {
    alert("Faltan completar campos");
    return;
  } else {
    //Si no hay errores, mostramos una alerta indicando que se envio correctamente
    alert("Mensaje enviado correctamente");
  }
});
