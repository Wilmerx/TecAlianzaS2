const usuarios = {
    "admin": "admin123",
    "juan": "abcd",
    "maria": "1234"
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if(usuarios[usernameInput] === passwordInput) {
        sessionStorage.setItem("usernameInput", usernameInput);
        document.getElementById("validationText").textContent = "¡Inicio de sesión exitoso!";
        window.location.href = "index.html";
    } else {
        document.getElementById("validationText").textContent = "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
});
}

const usuarioActivo = sessionStorage.getItem("usernameInput");
const textoUsuario = document.getElementById("usuarioActivo");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

if (usuarioActivo && textoUsuario) {
    textoUsuario.innerHTML = '¡Hola, ' + usuarioActivo + '!';
    textoUsuario.style.display = "inline";
    
    if (btnLogin) {
        btnLogin.style.display = "none";
    }
    
    if (btnLogout) {
        btnLogout.style.display = "inline-block";
    }
}

if (btnLogout) {
    btnLogout.addEventListener("click", function() {
        sessionStorage.removeItem("usernameInput");
        if (textoUsuario) {
            textoUsuario.style.display = "none";
        }
        if (btnLogin) {
            btnLogin.style.display = "inline";
        }
        if (btnLogout) {
            btnLogout.style.display = "none";
        }
        window.location.href = "index.html";
    });
}