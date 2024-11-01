import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
    const navigate = useNavigate();

    const limpiarLocalStorage = () => {
        if (window.confirm("¿Estás seguro de que deseas limpiar los datos almacenados?")) {
            localStorage.clear();
            alert("Memoria del localStorage limpiada.");
        }
    };

    useEffect(() => {
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            document.getElementById("botonLimpiar").style.display = "block";
        });
    }, []);

    return (
        <div className="inicio">
            <header>
            <h1>Bienvenido a la Clínica de Mascotas</h1>
            <button onClick={() => navigate("/registrar-usuario")}>Registrar Usuario</button>
            <button onClick={() => navigate("/registrar-cita")}>Registrar Cita Médica</button>
            <button onClick={() => navigate("/ver-usuarios")}>Ver Usuarios</button>
            <button onClick={() => navigate("/ver-citas")}>Ver Citas Médicas</button>
            <button id="botonLimpiar" onClick={limpiarLocalStorage} style={{ display: "none" }}> Limpiar Memoria </button>
            </header>
            <main className="mainp">
                <div className="interno">
                <h2>Gestiona tus citas médicas y las de tu mascota</h2>
                <p>Utiliza las opciones del menú para registrar usuarios, programar citas o consultar información.</p>
                </div>
            </main>
        </div>
    );
}

export default Inicio;

