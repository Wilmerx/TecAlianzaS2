contarHastaNumero = () => {
    let numeroInput = document.getElementById("numeroContar");
    let resultado = document.getElementById("resultadoContar");
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 1) {
        resultado.textContent = "Por favor, ingresa un número válido mayor que 0.";
        return;
    }

    let mensaje = "";

    for(let i = 1; i <= numero; i++) {
        mensaje += i + " ";
    }
    resultado.textContent = mensaje;
}

sumarNumeros = () => {
    let numero1Input = document.getElementById("numero1Sumar");
    let numero2Input = document.getElementById("numero2Sumar");
    let resultado = document.getElementById("resultadoSumar");

    const numero1 = parseInt(numero1Input.value);
    const numero2 = parseInt(numero2Input.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Por favor, ingresa números válidos.";
        return;
    }

    const suma = numero1 + numero2;
    resultado.textContent = "La suma es: " + suma;
}

verificarParImpar = () => {
    let numeroInput = document.getElementById("numeroParImpar");
    let resultado = document.getElementById("resultadoParImpar")

    const numero = parseInt(numeroInput.value);

    if (numero < 0) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    if (numero % 2 == 0) {
        resultado.textContent = "El número digitado es PAR."
        return;
    } else {
        resultado.textContent = "El número digitado es IMPAR."
        return;
    }
}

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

const jugar = (opcionUsuario) => {
    const opciones = ["piedra", "papel", "tijera"];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    const resultado = document.getElementById("resultadoJuego");

    if (opcionUsuario === opcionComputadora) {
        resultado.textContent = "¡Es un empate!";
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijera" && opcionComputadora === "papel")
    ) {
        resultado.textContent = "¡Ganaste! El computador eligió: " + opcionComputadora;
    } else {
        resultado.textContent = "¡Perdiste! El computador eligió: " + opcionComputadora;
    }
}

document.getElementById("btnContar").addEventListener("click", contarHastaNumero);
document.getElementById("resultadoContar");

document.getElementById("btnSumar").addEventListener("click", sumarNumeros);
document.getElementById("resultadoSumar");

document.getElementById("btnParImpar").addEventListener("click", verificarParImpar);
document.getElementById("resultadoParImpar");

document.getElementById("btnAdivinar").addEventListener("click", adivinarNumero);
document.getElementById("btnReiniciar").addEventListener("click", reiniciarJuego);

document.getElementById("btnPiedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("btnPapel").addEventListener("click", () => jugar("papel"));
document.getElementById("btnTijera").addEventListener("click", () => jugar("tijera"));