import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerCitas() {
    const navigate = useNavigate();
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        const citasRegistradas = JSON.parse(localStorage.getItem("citas")) || [];
        setCitas(citasRegistradas);
    }, []);

    return (
        <div className="ver-citas">
            <header>
            <h1>Lista de Citas Médicas</h1>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
            </header>
            <main className="mainvc">
            <h3>Citas Programadas</h3>
            {citas.length > 0 ? (
                <ul>
                    {citas.map((cita, index) => (
                        <li key={index}>
                            <strong>Nombre del Dueño:</strong> {cita.nombrePersona} <br />
                            <strong>Nombre de la Mascota:</strong> {cita.nombreMascota} <br />
                            <strong>Fecha:</strong> {cita.fechaCita} <br />
                            <strong>Hora:</strong> {cita.horaCita}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay citas registradas.</p>
            )}

            </main>
        </div>
    );
}

export default VerCitas;

