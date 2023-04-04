function handlesubmit(event){
    event.preventDefault();
    console.log("Hola mundo");
}
const $form=
 document.querySelector("form");
 $form.addEventListener("submit",handlesubmit);