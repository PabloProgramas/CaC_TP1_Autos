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

const autos = [
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

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, #formulario textarea');
const errores = document.querySelectorAll('.error');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  let hayErrores = false;

  // Validar campos
  inputs.forEach(input => {
    const error = document.querySelector(`#formulario .error[for="${input.id}"]`);

    if (input.value.trim() === '') {
      hayErrores = true;
      error.textContent = 'Este campo es obligatorio';
      error.style.display = 'block';
    }
  });

  if (hayErrores) {
    alert("Faltan completar campos")
    return; 
  } else {
    alert("Mensaje enviado correcetaomente")
  }
});

