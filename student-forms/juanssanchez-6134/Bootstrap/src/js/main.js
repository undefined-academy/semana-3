// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola Mundo")
}

const $form = document.getElementById("form");
$form.addEventListener("submit", handleSubmit);