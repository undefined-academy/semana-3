// Semana 2 Clase 2
const Person = {
  name: "Cristhian",
  lastname: "Medina",
  age: 29,
  isFather: true,
  like: [
    "play with my children",
    "watch animated movies",
    "listen music",
    "play videogames"
  ]
}

typeof Person === "object" && Person != null; // comprueba si es un objeto, valida que no sea null debido a que el tipo null es un objeto.

typeof Person === "object" && Person.length != null; // comprueba si es un array, valida que la propiedad length sea valida.

Array.isArray(Person); // forma actual de validar un array.

// Semana 2 Clase 4

function stopAction(event) {
  event.preventDefault();
  console.log('Hi world');
}

const form = document.querySelector("form");
form.addEventListener("submit", stopAction);

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';