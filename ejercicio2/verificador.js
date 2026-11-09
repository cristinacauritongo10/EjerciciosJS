
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let contrasena = document.getElementById("contrasena").value;
    let resultado = document.getElementById("resultado");

    let longitud = contrasena.length >= 8;
    let tieneNumero = false;
    let sinEspacios = !contrasena.includes(" ");

    for (let i = 0; i < contrasena.length; i++) {
        if (contrasena[i] >= "0" && contrasena[i] <= "9") {
            tieneNumero = true;
        }
    }

    resultado.innerHTML = "";

    if (longitud) {
        resultado.innerHTML += "<p>✓ Tiene al menos 8 caracteres</p>";
    } else {
        resultado.innerHTML += "<p>✗ Tiene menos de 8 caracteres</p>";
    }

    if (tieneNumero) {
        resultado.innerHTML += "<p>✓ Contiene al menos un número</p>";
    } else {
        resultado.innerHTML += "<p>✗ No contiene números</p>";
    }

    if (sinEspacios) {
        resultado.innerHTML += "<p>✓ No contiene espacios</p>";
    } else {
        resultado.innerHTML += "<p>✗ Contiene espacios</p>";
    }

    if (longitud && tieneNumero && sinEspacios) {
        resultado.innerHTML += "<h3>Cumple todas las reglas</h3>";
    }
});
