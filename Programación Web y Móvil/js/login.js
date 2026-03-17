const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        togglePassword.textContent = type === 'password' ? '👁' : '👁‍🗨';
    });
}

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInputForm = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        validateEmail();
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() !== '') {
            validateEmail();
        }
    });
}

if (passwordInputForm) {
    passwordInputForm.addEventListener('blur', () => {
        validatePassword();
    });

    passwordInputForm.addEventListener('input', () => {
        if (passwordInputForm.value.trim() !== '') {
            validatePassword();
        }
    });
}

function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email === '') {
        emailInput.classList.remove('error');
        emailError.classList.remove('show');
        emailError.textContent = '';
        return true;
    }

    if (!isValidEmail(email)) {
        emailInput.classList.add('error');
        emailError.classList.add('show');
        emailError.textContent = 'Por favor, ingresa un correo válido';
        return false;
    }

    emailInput.classList.remove('error');
    emailError.classList.remove('show');
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const password = passwordInputForm.value;
    
    if (password === '') {
        passwordInputForm.classList.remove('error');
        passwordError.classList.remove('show');
        passwordError.textContent = '';
        return true;
    }

    if (!isValidPassword(password)) {
        passwordInputForm.classList.add('error');
        passwordError.classList.add('show');
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
        return false;
    }

    passwordInputForm.classList.remove('error');
    passwordError.classList.remove('show');
    passwordError.textContent = '';
    return true;
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            mostrarExito();
        }
    });
}

function mostrarExito() {
    const submitBtn = document.querySelector('.submit-btn');
    const originalContent = submitBtn.innerHTML;

    submitBtn.style.background = 'linear-gradient(to right, #27ae60, #229954)';
    submitBtn.innerHTML = '<span class="btn-text">✓ Iniciando sesión...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
        console.log('Credenciales de login:');
        console.log('Email:', emailInput.value);
        console.log('Contraseña: ••••••••');
        
        setTimeout(() => {
            submitBtn.style.background = 'linear-gradient(to right, #2591d1, #124766)';
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;

            alert('¡Login exitoso! 🎉\n\nNota: Este es un formulario de demostración.');
            loginForm.reset();
        }, 2000);
    }, 1500);
}

const socialBtns = document.querySelectorAll('.social-btn');

socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const btnType = btn.classList.contains('google-btn') ? 'Google' : 'WhatsApp';
        alert(`Login con ${btnType} - Esta es una demostración`);
    });
});

const forgotPassword = document.querySelector('.forgot-password');

if (forgotPassword) {
    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Se enviará un enlace de recuperación a tu correo electrónico');
    });
}

const signupLink = document.querySelector('.signup-link a');

if (signupLink) {
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Serás redirigido a la página de registro');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Página de login cargada correctamente');
    
    const inputs = document.querySelectorAll('.form-group input');
    inputs.forEach((input, index) => {
        input.style.animation = `fadeInUp 0.6s ease forwards`;
        input.style.animationDelay = `${0.3 + index * 0.1}s`;
    });
});

const rememberCheckbox = document.getElementById('remember');
const loginFormEl = document.getElementById('loginForm');

window.addEventListener('load', () => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedRemember = localStorage.getItem('remember') === 'true';

    if (savedEmail && savedRemember) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }
});

if (rememberCheckbox) {
    rememberCheckbox.addEventListener('change', () => {
        if (rememberCheckbox.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
            localStorage.setItem('remember', 'true');
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.setItem('remember', 'false');
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('input', () => {
        if (rememberCheckbox.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
        }
    });
}
