
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarUsuario() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombrePersona: "",
        nombreMascota: "",
        tipoMascota: "",
        edadMascota: ""
    });
    const [error, setError] = useState("");

    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexSoloNumeros = /^[0-9]+$/;

    const validarFormularioUsuario = () => {
        const { nombrePersona, nombreMascota, tipoMascota, edadMascota } = form;

        if (!nombrePersona || !nombreMascota || !tipoMascota || !edadMascota) {
            setError("Todos los campos son obligatorios.");
            return false;
        }
        if (!regexSoloLetras.test(nombrePersona)) {
            setError("El nombre de la persona no debe contener números.");
            return false;
        }
        if (!regexSoloLetras.test(tipoMascota)) {
            setError("El tipo de mascota no debe contener números.");
            return false;
        }
        if (!regexSoloNumeros.test(edadMascota)) {
            setError("La edad de la mascota debe ser un número.");
            return false;
        }

        setError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormularioUsuario()) {
            const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuariosGuardados.push(form);
            localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
            alert("Usuario registrado correctamente.");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="registrar-usuario">
            <header>
            <h1>Registrar Usuario y Mascota</h1>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
            </header>
            <main className="mainru">
            <form onSubmit={handleSubmit}>
                <label>Nombre de la Persona:</label>
                <input type="text" name="nombrePersona" value={form.nombrePersona} onChange={handleChange} />

                <label>Nombre de la Mascota:</label>
                <input type="text" name="nombreMascota" value={form.nombreMascota} onChange={handleChange} />

                <label>Tipo de Mascota:</label>
                <input type="text" name="tipoMascota" value={form.tipoMascota} onChange={handleChange} />

                <label>Edad de la Mascota:</label>
                <input type="text" name="edadMascota" value={form.edadMascota} onChange={handleChange} />

                <button type="submit">Registrar</button>
                {error && <p className="mensajeError">{error}</p>}
            </form>
            </main>
        </div>
    );
}

export default RegistrarUsuario;


