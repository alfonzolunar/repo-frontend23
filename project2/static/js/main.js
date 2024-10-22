// Función para validar el formulario de registro de usuario y mascota
function validarFormularioUsuario() {
    var nombrePersona = document.getElementById("nombrePersona").value;
    var nombreMascota = document.getElementById("nombreMascota").value;
    var tipoMascota = document.getElementById("tipoMascota").value;
    var edadMascota = document.getElementById("edadMascota").value;
    var mensajeError = document.getElementById("mensajeError");

    // Verificar si los campos están vacíos
    if (nombrePersona === "" || nombreMascota === "" || tipoMascota === "" || edadMascota === "") {
        mensajeError.textContent = "Todos los campos son obligatorios.";
        return false;
    }

    // Validar que el nombre de la persona no contenga números
    var regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexSoloLetras.test(nombrePersona)) {
        mensajeError.textContent = "El nombre de la persona no debe contener números.";
        return false;
    }

    // Validar que el tipo de mascota no contenga números
    if (!regexSoloLetras.test(tipoMascota)) {
        mensajeError.textContent = "El tipo de mascota no debe contener números.";
        return false;
    }

    // Validar que la edad de la mascota no contenga letras
    var regexSoloNumeros = /^[0-9]+$/;
    if (!regexSoloNumeros.test(edadMascota)) {
        mensajeError.textContent = "La edad de la mascota debe ser un número.";
        return false;
    }

    // Si todo es correcto
    mensajeError.textContent = "";
    alert("Formulario de usuario enviado correctamente.");
    return true;
}

// Función para validar el formulario de registro de cita médica
function validarFormularioCita() {
    var nombrePersona = document.getElementById("nombrePersona").value;
    var nombreMascota = document.getElementById("nombreMascota").value;
    var fechaCita = document.getElementById("fechaCita").value;
    var horaCita = document.getElementById("horaCita").value;
    var mensajeErrorCita = document.getElementById("mensajeErrorCita");

    // Verificar si los campos están vacíos
    if (nombrePersona === "" || nombreMascota === "" || fechaCita === "" || horaCita === "") {
        mensajeErrorCita.textContent = "Todos los campos son obligatorios.";
        return false;
    }

    // Validar que el nombre de la persona no contenga números
    var regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexSoloLetras.test(nombrePersona)) {
        mensajeErrorCita.textContent = "El nombre de la persona no debe contener números.";
        return false;
    }

    // Si todo es correcto
    mensajeErrorCita.textContent = "";
    alert("Cita registrada correctamente.");
    return true;
}

// Función para limpiar el localStorage
function limpiarLocalStorage() {
    if (confirm("¿Estás seguro de que deseas limpiar los datos almacenados?")) {
        localStorage.clear();
        alert("Memoria del localStorage limpiada.");
    }
}

// Evento para mostrar el botón oculto al hacer clic derecho en el inicio
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Previene el menú contextual por defecto
    var botonLimpiar = document.getElementById("botonLimpiar");
    botonLimpiar.style.display = "block"; // Muestra el botón oculto
});

