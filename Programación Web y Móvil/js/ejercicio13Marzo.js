let numeroAdivinar = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const adivinarNumero = () => {
    const numeroIngresado = document.getElementById("numeroUsuario");
    const resultado = document.getElementById("resultadoAdivinar");
    const intentosPantalla = document.getElementById("intentosPantalla");
    const intentosRestantes = 4;
    
    const numero = parseInt(numeroIngresado.value);

    if (intentos >= intentosRestantes) {
        resultado.textContent = "¡Has agotado tus intentos! El número a adivinar era: " + numeroAdivinar;
        return;
    }

    intentos++;
    intentosPantalla.textContent = "Intentos restantes: " + (intentosRestantes - intentos);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        resultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    } else {
        if (numero < numeroAdivinar) {
            resultado.textContent = "¡El número ingresado es menor al número a adivinar!";
        } else if (numero > numeroAdivinar) {
            resultado.textContent = "¡El número ingresado es mayor al número a adivinar!";
        } else if (numero === numeroAdivinar) {
            resultado.textContent = "¡Lo has logrado en el intento: " + intentos + "! El número ingresado es el número a adivinar.";
        }
    }

    if (intentos === intentosRestantes && numero !== numeroAdivinar) {
        resultado.textContent = "¡Has agotado tus intentos! El número a adivinar era: " + numeroAdivinar;
        document.getElementById("btnAdivinar").style.display = "none";
    }
}

const reiniciarJuego = () => {
    intentos = 0;
    numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultadoAdivinar").textContent = "Juego reiniciado. ¡Intenta adivinar el nuevo número!";
    document.getElementById("intentosPantalla").textContent = "Intentos restantes: 4";
    document.getElementById("btnAdivinar").style.display = "inline-block";
}

document.getElementById("btnAdivinar").addEventListener("click", adivinarNumero);
document.getElementById("btnReiniciar").addEventListener("click", reiniciarJuego);