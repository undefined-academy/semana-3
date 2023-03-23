function handleSubmit(event){
    event.preventDefault();
    console.log("hello world");
}

const $form = document.querySelector("form");

$form.addEventListener("submit", handleSubmit);