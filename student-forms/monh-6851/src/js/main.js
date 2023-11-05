// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// ============================================================
//console.log("hola");
function handleSubmit(event) {
    event.preventDefault()
    console.log("holaaaa");
}

const $form =document.querySelector("form")

//al hacer el submit le paso la f handleSubmit 
$form.addEventListener("submit",handleSubmit)
