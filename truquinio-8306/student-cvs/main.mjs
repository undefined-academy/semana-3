// main.mjs
function handleSubmit(event) {
  event.preventDefault(); // 🍎
  console.log("Hola mundo");
}

//🍎 Debemos prevenir el comportamiento por defecto del envío de la información al servidor.

const form = document.getElementById("contact");
form.addEventListener("submit", function (event) {
  event.preventDefault();
})


// OTRA FORMA
// const $form = document.querySelector("contact");
// $form.addEventListener("submit", handleSubmit);