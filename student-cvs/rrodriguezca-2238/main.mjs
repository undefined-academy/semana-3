console.log("Hello world");
function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hello World");
}

const $form =
document.querySelector("form");
$form.addEventListener("submit",
handleSubmit);