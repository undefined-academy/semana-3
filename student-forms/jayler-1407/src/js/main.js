// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// main.mjs
function handleSubmit(event) {
    event.preventDefault(); // 🍎
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

const $slider = document.querySelector(".slider")
console.log($slider.value)
const $value = document.querySelector(".value")
$value.textContent = `${"$"+ $slider.value}` 
$slider.oninput = function(){
    $value.textContent = `${"$"+ $slider.value}` 
}