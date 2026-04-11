document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (nombreInput.value === '') {
            alert('El nombre es obligatorio.');
            return;
        }

        if (telefonoInput.value === '') {
            alert('El teléfono es obligatorio.');
            return;
        }

        if (emailInput.value === '') {
            alert('El correo electrónico es obligatorio.');
            return;
        }

        if (passwordInput.value === '') {
            alert('La contraseña es obligatoria.');
            return;
        }

        const usuario = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        let usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
        usuariosRegistrados.push(usuario);
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

        alert('¡Registro exitoso! Pronto nos comunicaremos contigo.');
        form.reset();
    });
});