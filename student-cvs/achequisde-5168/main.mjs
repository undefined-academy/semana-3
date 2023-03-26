function handleSubmit(e) {
  e.preventDefault();
  console.log("Hello, world!");
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
