function handleSubmit(event){
     event.prevenDefault()
     console.log("Hola Mundo");
 }

 const $form = document.querySelector("form")

 $form.addEventListener("submit", handleSubmit)
