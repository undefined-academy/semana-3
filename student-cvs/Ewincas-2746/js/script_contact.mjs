
function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}
    
const $form =document.querySelector("form");
$form.addEventListener("submit", handleSubmit);


/*
const form = document.getElementById('form-contact')

let con  = 0
form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Se envio el formulario')
})*/