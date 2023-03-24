function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hello Wold");
}

const $form =
    document.querySelector("form");
    $form.addEventListener("submit", handleSubmit);
    