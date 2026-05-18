function handleSubmit(event){
    event.preventDefault();
    console.log("se hizo submit");
}

const $form= document.querySelector("form");
$form.addEventListener("submit", handleSubmit);