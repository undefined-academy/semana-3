// Prevent the form from submitting
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
