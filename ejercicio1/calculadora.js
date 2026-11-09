alert("JavaScript está funcionando");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let resultado = document.getElementById("resultado");

    if (precio === "" || cantidad === "") {
        resultado.textContent = "Error: complete todos los campos primero.";
        return;
    }

    precio = Number(precio);
    cantidad = Number(cantidad);

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        resultado.textContent = "Error: ingrese una cantidad entera válida.";
        return;
    }

    if (precio <= 0) {
        resultado.textContent = "Error: ingrese un precio válido.";
        return;
    }

    let total = precio * cantidad;

    resultado.textContent = "Total a pagar: $" + total.toFixed(2);
});
