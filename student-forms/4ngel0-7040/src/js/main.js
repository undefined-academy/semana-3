// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
});

const eventListeners = () => {
    //Mustra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="rd"]');

    metodoContacto.forEach(input => {
        input.addEventListener('click', mostrarMetodoContacto);
    });
}


const mostrarMetodoContacto = (e) => {
    const contactoDiv = document.querySelector('#contacto');

    if (e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
        <div class="form-floating"> 
            <input class="form-control" type="tel" name="telefono" id="telefono" placeholder="Tu Teléfono" required>
            <label class="form-label label-contacto" for="telefono">Número de Teléfono</label>
        </div>
        `;
        return;
    } else {
        contactoDiv.innerHTML = `
        <div class="form-floating"> 
            <input class="form-control" type="email" name="email" id="email" placeholder="Tu E-mail" required>
            <label class="form-label label-contacto" for="email">E-mail</label>
        </div>
        `;
    }
}