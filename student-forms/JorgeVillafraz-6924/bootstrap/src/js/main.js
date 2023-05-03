// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const handleSubmit = (event) => {
    event.preventDefault();
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);