// Import our custom CSS
import '../scss/styles.scss'

function handleSubmit(event){
    event.preventDefault();
    console.log("se hizo submit en el formulario con bootstrap");
}

const $form= document.querySelector("form");
$form.addEventListener("submit", handleSubmit);