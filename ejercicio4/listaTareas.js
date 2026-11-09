
let formulario = document.getElementById("formulario");
let lista = document.getElementById("listaTareas");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let campo = document.getElementById("tarea");
    let texto = campo.value.trim();

    if (texto === "") {
        mensaje.textContent = "Error: ingrese una tarea válida.";
        return;
    }

    mensaje.textContent = "";

    let elemento = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = texto;

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.classList.add("completada");
        } else {
            span.classList.remove("completada");
        }
    });

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.type = "button";
    botonEliminar.className = "eliminar";

    botonEliminar.addEventListener("click", function() {
        elemento.remove();
    });

    elemento.appendChild(checkbox);
    elemento.appendChild(span);
    elemento.appendChild(botonEliminar);

    lista.appendChild(elemento);

    campo.value = "";
});
