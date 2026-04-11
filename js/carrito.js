const servicios = [
    {
        id: 1, nombre: "LZM232", precio: 1, img: "img/LZM232.jpeg", descripcion: "Camión de carga ligera con capacidad de 5 toneladas"},
    {
        id: 2, nombre: "SPM609", precio: 1000, img: "img/SPM609.jpeg", descripcion: "Camión de carga mediana con capacidad de 8 toneladas"},
    {
        id: 3, nombre: "SPN970", precio: 1000, img: "img/SPN970.jpeg", descripcion: "Camión de carga pesada con capacidad de 12 toneladas"},
    {
        id: 4, nombre: "SZU878", precio: 1000, img: "img/SZU878.jpeg", descripcion: "Camión refrigerado para carga perecedera"},
    {
        id: 5, nombre: "TDS155", precio: 1000, img: "img/TDS155.jpeg", descripcion: "Camión de plataforma para equipos especiales"},
    {
        id: 6, nombre: "TZS937", precio: 1000, img: "img/TZS937.jpeg", descripcion: "Camión tanque para transporte de líquidos"},
    {
        id: 7, nombre: "UFY540", precio: 1000, img: "img/UFY540.jpeg", descripcion: "Camión de transporte de autopartes"},
    {
        id: 8, nombre: "VEO798", precio: 1000, img: "img/VEO798.jpeg", descripcion: "Camión de mudanza con equipo de carga"},
    {
        id: 9, nombre: "JTS452", precio: 1000, img: "img/JTS452.jpeg", descripcion: "Camión especializado para carga granel"}
];

function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let servicioSeleccionado = servicios.find(servicio => servicio.id === id);
    carrito.push(servicioSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("¡Servicio añadido al carrito! 🎉");
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedor = document.getElementById("carritoContainer");
    let contadorElement = document.getElementById("contadorServicios");
    let carritoVacio = document.getElementById("carritoVacio");

    if(!contenedor) return;

    contenedor.innerHTML = "";

    // Mostrar/ocultar mensaje de carrito vacío
    if (carrito.length === 0) {
        carritoVacio.style.display = "block";
        contadorElement.textContent = "0 servicios";
        actualizarTotal(carrito);
        return;
    } else {
        carritoVacio.style.display = "none";
    }

    // Actualizar contador
    contadorElement.textContent = carrito.length + (carrito.length === 1 ? " servicio" : " servicios");

    // Crear tarjetas de servicios
    carrito.forEach(function(servicio, index) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjetaServicio";
        tarjeta.innerHTML = `
            <div class="imagenServicio">
                <img src="${servicio.img}" alt="${servicio.nombre}">
            </div>
            <div class="detallesServicio">
                <h3 class="nombreServicio">${servicio.nombre}</h3>
                <p class="descripcionServicio">${servicio.descripcion}</p>
                <p class="precioServicio">$${servicio.precio.toLocaleString('es-CO')}</p>
                <div class="botonesServicio">
                    <button class="btnEliminar" onclick="eliminarDelCarrito(${index})">❌ Eliminar</button>
                    <button class="btnDetalles">👁️ Detalles</button>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });

    actualizarTotal(carrito);
}

function actualizarTotal(carrito) {
    let subtotal = 0;
    carrito.forEach(servicio => {
        subtotal += servicio.precio;
    });

    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    document.getElementById("subtotal").textContent = "$" + subtotal.toLocaleString('es-CO');
    document.getElementById("iva").textContent = "$" + Math.round(iva).toLocaleString('es-CO');
    document.getElementById("total").textContent = "$" + Math.round(total).toLocaleString('es-CO');
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const servicioEliminado = carrito[index];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    alert(`❌ ${servicioEliminado.nombre} ha sido removido del carrito`);
}

function vaciarCarrito() {
    if (confirm("¿Estás seguro de que deseas vaciar todo el carrito?")) {
        localStorage.removeItem("carrito");
        mostrarCarrito();
        alert("¡Carrito vaciado! 🗑️");
    }
}

// Inicializar
mostrarCarrito();

const btnVaciar = document.getElementById("vaciarCarrito");
if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
}