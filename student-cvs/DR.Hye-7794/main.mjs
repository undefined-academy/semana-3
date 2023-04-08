function handleSubmit(event) {
  event.preventDefault();
  console.log("hola mundo");
}

const form = document.getElementById("btn");
form.addEventListener("submit", handleSubmit);
