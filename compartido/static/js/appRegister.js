
function register_user(){
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("lastname").value
    let cedula = document.getElementById("id").value
    let telefono = document.getElementById("phone").value
    let fecha = document.getElementById("date").value
    let email = document.getElementById("email").value
    let contrasena = document.getElementById("passw").value

    document.write(nombre + " " + apellido + " " + cedula + " " + telefono + " " + fecha
        + " " + email + " " + contrasena
    )
}