// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const handleSubmit = e =>{
    e.preventDefault();
    $form.reset();
    console.log("Mensaje enviado");
}

const $form = document.querySelector("form");

$form.addEventListener("submit", handleSubmit);