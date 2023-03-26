const handleSubmit = e => {
    e.preventDefault()
    console.log("Hola mundo 🌎");;
    $form.reset();
}

const $form = document.querySelector("form");

$form.addEventListener("submit",handleSubmit);