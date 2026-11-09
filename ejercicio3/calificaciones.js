
let notas = [8, 6, 9, 7, 5, 10, 4, 7];

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let resultado = document.getElementById("resultado");

    if (notas.length === 0) {
        resultado.textContent = "No hay calificaciones para analizar.";
        return;
    }

    let suma = 0;
    let maxima = notas[0];
    let minima = notas[0];
    let aprobadas = 0;
    let noAprobadas = 0;

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] < 0 || notas[i] > 10 || !Number.isFinite(notas[i])) {
            resultado.textContent = "Error: existen notas fuera del rango de 0 a 10.";
            return;
        }

        suma += notas[i];

        if (notas[i] > maxima) {
            maxima = notas[i];
        }

        if (notas[i] < minima) {
            minima = notas[i];
        }

        if (notas[i] >= 7) {
            aprobadas++;
        } else {
            noAprobadas++;
        }
    }

    let promedio = suma / notas.length;

    resultado.innerHTML =
        "<p>Calificaciones: " + notas.join(", ") + "</p>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Nota máxima: " + maxima + "</p>" +
        "<p>Nota mínima: " + minima + "</p>" +
        "<p>Aprobadas: " + aprobadas + "</p>" +
        "<p>No aprobadas: " + noAprobadas + "</p>";
});
