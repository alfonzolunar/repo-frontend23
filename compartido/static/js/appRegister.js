
function register_user(){
        let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let cedula = document.getElementById("id").value
    let telefono = document.getElementById("phone").value
    let fecha = document.getElementById("date").value
    let email = document.getElementById("email").value
    let contrasena = document.getElementById("passw").value
    let check_accept = document.getElementById("check-accepted").checked
   
    let confirm_vacio = validar_vacio(nombre, apellido, cedula, telefono, fecha, email, contrasena, check_accept)
    if (confirm_vacio == true) {
        alert("Usuario creado")
    }
}

function validar_vacio(nombre, apellido, cedula, telefono, fecha, email, contrasena, check_accept) {
    let confirm_vacio = true
    if (nombre == "") {
        alert("El campo nombre no puede estar vacío")
        confirm_vacio = false
    }

    if (apellido == "") {
        alert("El campo apellido no puede estar vacío")
        confirm_vacio = false
    }

    if (cedula == "") {
        alert("El campo cedula no puede estar vacío")
        confirm_vacio = false
    }

    if (telefono == "") {
        alert("El campo telefono no puede estar vacío")
        confirm_vacio = false
    }
    
    if (fecha == "") {
        alert("El campo fecha no puede estar vacío")
        confirm_vacio = false
    }
    
    if (email == "") {
        alert("El campo email no puede estar vacío")
        confirm_vacio = false
    }
    
    if (contrasena == "") {
        alert("El campo contraseña no puede estar vacío")
        confirm_vacio = false
    }

    if (check_accept == "") {
        alert("Debes aceptar los terminos")
        confirm_vacio = false
    }

    return confirm_vacio
}