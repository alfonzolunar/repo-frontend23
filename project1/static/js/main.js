// Función para registrar un usuario con su mascota
function registrarUsuario() {
    const nombrePersona = document.getElementById('nombrePersona').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipoMascota = document.getElementById('tipoMascota').value;
    const edadMascota = document.getElementById('edadMascota').value;

    if (nombrePersona && nombreMascota && tipoMascota && edadMascota) {
        const usuario = {
            nombrePersona: nombrePersona,
            nombreMascota: nombreMascota,
            tipoMascota: tipoMascota,
            edadMascota: edadMascota
        };

        // Guardar los datos en el almacenamiento local (localStorage)
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario y mascota registrados exitosamente.');
        limpiarFormulario();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Función para registrar una cita médica para una mascota
function registrarCita() {
    const nombreDueño = document.getElementById('nombreDueño').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const fechaCita = document.getElementById('fechaCita').value;
    const horaCita = document.getElementById('horaCita').value;

    if (nombreDueño && nombreMascota && fechaCita && horaCita) {
        const cita = {
            nombreDueño: nombreDueño,
            nombreMascota: nombreMascota,
            fechaCita: fechaCita,
            horaCita: horaCita
        };

        // Guardar los datos de la cita en el almacenamiento local (localStorage)
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.push(cita);
        localStorage.setItem('citas', JSON.stringify(citas));

        alert('Cita médica registrada exitosamente.');
        limpiarFormulario();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Función para mostrar los usuarios registrados
function mostrarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const listaUsuarios = document.getElementById('listaUsuarios');

    if (usuarios.length > 0) {
        usuarios.forEach(usuario => {
            const usuarioDiv = document.createElement('div');
            usuarioDiv.classList.add('usuario');
            usuarioDiv.innerHTML = `
                <p class="nombreUsuario">Nombre del Dueño: ${usuario.nombrePersona}</p>
                <p class="mascotaUsuario">Nombre de la Mascota: ${usuario.nombreMascota}</p>
                <p class="tipoMascota">Tipo de Mascota: ${usuario.tipoMascota}</p>
                <p class="edadMascota">Edad de la Mascota: ${usuario.edadMascota}</p>
            `;
            listaUsuarios.appendChild(usuarioDiv);
        });
    } else {
        return
        //listaUsuarios.innerHTML = '<p>No hay usuarios registrados.</p>'; //Este mensaje se puede dejar inicalmente si no hay usuarios registrados
    }
}

// Función para mostrar las citas médicas programadas
function mostrarCitas() {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const listaCitas = document.getElementById('listaCitas');

    if (citas.length > 0) {
        citas.forEach(cita => {
            const citaDiv = document.createElement('div');
            citaDiv.classList.add('cita');
            citaDiv.innerHTML = `
                <p class="nombreDueño">Dueño: ${cita.nombreDueño}</p>
                <p class="nombreMascota">Mascota: ${cita.nombreMascota}</p>
                <p class="fechaCita">Fecha: ${cita.fechaCita}</p>
                <p class="horaCita">Hora: ${cita.horaCita}</p>
            `;
            listaCitas.appendChild(citaDiv);
        });
    } else {
        listaCitas.innerHTML = '<p>No hay citas programadas.</p>'; //Este mensaje se puede dejar inicalmente si no hay citas programadas
    }
}

// Función para limpiar los campos del formulario después de registrar un usuario o cita
function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}

// Llamadas a las funciones de mostrar datos cuando la página está lista
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('listaUsuarios')) {
        mostrarUsuarios();
    }

    if (document.getElementById('listaCitas')) {
        mostrarCitas();
    }
});

// Función para mostrar boton oculto para restear la localStore

// Mostrar el botón al hacer clic derecho en la página
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Evitar el menú contextual predeterminado
    const botonLimpiar = document.getElementById('botonLimpiar');
    botonLimpiar.style.display = 'block'; // Mostrar el botón
    });

// Función para limpiar el localStorage
    function limpiarMemoria() {
    if (confirm('¿Estás seguro de que quieres limpiar la memoria? Esto eliminará todos los datos guardados.')) {
    localStorage.clear(); // Limpiar el almacenamiento local
    alert('Memoria limpiada correctamente.');
    }
    }

// Ocultar el botón si se hace clic en cualquier otra parte
    document.addEventListener('click', function() {
    document.getElementById('botonLimpiar').style.display = 'none';
    });
