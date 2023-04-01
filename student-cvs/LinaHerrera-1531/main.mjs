// main.mjs
function handleSubmit(event) {
    //para prevenir el comportamiento por defecto del envío de la información al servidor
    event.preventDefault(); 
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);