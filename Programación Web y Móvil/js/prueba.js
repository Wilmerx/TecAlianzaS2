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

document.getElementById("btnContar").addEventListener("click", contarHastaNumero);
document.getElementById("resultadoContar");

document.getElementById("btnSumar").addEventListener("click", sumarNumeros);
document.getElementById("resultadoSumar");

document.getElementById("btnParImpar").addEventListener("click", verificarParImpar);