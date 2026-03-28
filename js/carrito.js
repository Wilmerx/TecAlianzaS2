const servicios = [
    {
        id: 1, nombre: "LZM232", precio: 1000, img: "img/LZM232.jpeg"},
    {
        id: 2, nombre: "SPM609", precio: 1500, img: "img/SPM609.jpeg"},
    {
        id: 3, nombre: "SPN970", precio: 2000, img: "img/SPN970.jpeg"},
    {
        id: 4, nombre: "SZU878", precio: 2500, img: "img/SZU878.jpeg"},
    {
        id: 5, nombre: "TDS155", precio: 3000, img: "img/TDS155.jpeg"},
    {
        id: 6, nombre: "TZS937", precio: 3500, img: "img/TZS937.jpeg"},
    {
        id: 7, nombre: "UFY540", precio: 4000, img: "img/UFY540.jpeg"},
    {
        id: 8, nombre: "VEO798", precio: 4500, img: "img/VEO798.jpeg"},
    {
        id: 9, nombre: "JTS452", precio: 5000, img: "img/JTS452.jpeg"}
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

    if(!contenedor) return;

    contenedor.textContent = "";

    let total = 0;

    carrito.forEach(function(servicio, index) {
        contenedor.innerHTML += 
                                "<div>" +
                                "<img src='" + servicio.img + "' width='100'>" +
                                "<h3>" + servicio.nombre + "</h3>" +
                                "<p>Precio: $" + servicio.precio + "</p>" +
                                "</div>";

        total += servicio.precio;
    });

    let totalElemento = document.getElementById("total");
    totalElemento.textContent = "Total: $" + total;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
    alert("¡Carrito vaciado! 🗑️");
}

mostrarCarrito();

document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito);