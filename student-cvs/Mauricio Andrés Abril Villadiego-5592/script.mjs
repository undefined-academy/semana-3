const handleSubmit = e => {
    e.preventDefault();
    $form.reset();
}

const $form = document.querySelector("form");

$form.addEventListener("submit",handleSubmit);