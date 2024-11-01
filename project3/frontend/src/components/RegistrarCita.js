import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarCita() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombrePersona: "",
        nombreMascota: "",
        fechaCita: "",
        horaCita: ""
    });
    const [error, setError] = useState("");

    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    const validarFormularioCita = () => {
        const { nombrePersona, nombreMascota, fechaCita, horaCita } = form;

        if (!nombrePersona || !nombreMascota || !fechaCita || !horaCita) {
            setError("Todos los campos son obligatorios.");
            return false;
        }
        if (!regexSoloLetras.test(nombrePersona)) {
            setError("El nombre de la persona no debe contener números.");
            return false;
        }

        setError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormularioCita()) {
            const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
            citasGuardadas.push(form);
            localStorage.setItem("citas", JSON.stringify(citasGuardadas));
            alert("Cita registrada correctamente.");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="registrar-cita">
            <header>
            <h1>Registrar Cita Médica</h1>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
            </header>
            <main className="mainrc">
            <form onSubmit={handleSubmit}>
                <label>Nombre de la Persona:</label>
                <input type="text" name="nombrePersona" value={form.nombrePersona} onChange={handleChange} />

                <label>Nombre de la Mascota:</label>
                <input type="text" name="nombreMascota" value={form.nombreMascota} onChange={handleChange} />

                <label>Fecha de la Cita:</label>
                <input type="date" name="fechaCita" value={form.fechaCita} onChange={handleChange} />

                <label>Hora de la Cita:</label>
                <input type="time" name="horaCita" value={form.horaCita} onChange={handleChange} />

                <button type="submit">Registrar Cita</button>
                {error && <p className="mensajeError">{error}</p>}
            </form>
            </main>
        </div>
    );
}

export default RegistrarCita;

