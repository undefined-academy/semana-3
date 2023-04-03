document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
});

const eventListeners = () => {
    const Menu = document.querySelector(".header-barra");

    Menu.addEventListener('click', navegacionResponsive);
    //Mustra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="rd"]');

    metodoContacto.forEach(input => {

        input.addEventListener('click', mostrarMetodoContacto);
    });

    const form = document.querySelector(".form");

    form.addEventListener("submit", handleSubmit);
}

const navegacionResponsive = () => {
    const navegacion = document.querySelector(".header-navegacion");
    navegacion.classList.toggle('ocultar');
}

const mostrarMetodoContacto = (e) => {
    const contactoDiv = document.querySelector('#contacto');

    if (e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
        <div class="form-group"> 
            <label for="telefono">Número de Teléfono</label>
            <input type="tel" name="telefono" id="telefono" placeholder="Tu Teléfono" required>
        </div>
        `;
        return;
    } else {
        contactoDiv.innerHTML = `
        <div class="form-group"> 
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Tu E-mail" required>
        </div>
        `;
    }
}

const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Hola mundo");
}