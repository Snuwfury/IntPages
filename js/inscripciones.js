document.addEventListener('DOMContentLoaded', function() {
    //agarro todos los valores
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const actividadSelect = document.getElementById('actividad');
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const actividadError = document.getElementById('actividadError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validar nombre
        if (nombreInput.value.trim() === '') {
            isValid = false;
            nombreError.textContent = 'Por favor, ingresa tu nombre.';
        } else {
            nombreError.textContent = '';
        }

        // Validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            emailError.textContent = 'Por favor, ingresa un email válido.';
        } else {
            emailError.textContent = '';
        }

        // Validar que seleccione una opc
        if (actividadSelect.value === '') {
            isValid = false;
            actividadError.textContent = 'Por favor, selecciona una actividad.';
        } else {
            actividadError.textContent = '';
        }
        // Evitar el envio si no es valido
        if (!isValid) {
            event.preventDefault(); 
        }
    });
});