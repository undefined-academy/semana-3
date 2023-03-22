const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hola mundo');
}

const $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
