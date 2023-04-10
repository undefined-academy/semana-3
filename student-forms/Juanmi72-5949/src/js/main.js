// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'





function handleSubmit(e){
    e.preventDefault();
        console.log("Hola Mundo");
        
}
    
    const $form = document.querySelector('form');
    console.log($form);
    $form.addEventListener("submit", handleSubmit);
