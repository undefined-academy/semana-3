function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
  }
  const $form = document.querySelector("FormContact");
  $form.addEventListener("submit", handleSubmit);