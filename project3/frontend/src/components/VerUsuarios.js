import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerUsuarios() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
        setUsuarios(usuariosRegistrados);
    }, []);

    return (
        <div className="ver-usuarios">
            <header>
            <h1>Usuarios y Mascotas Registradas</h1>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
            </header>
            <main className="mainvu">
            <h3>Listado de Usuarios</h3>
            {usuarios.length > 0 ? (
                <ul>
                    {usuarios.map((usuario, index) => (
                        <li key={index}>
                            <strong>Nombre del Dueño:</strong> {usuario.nombrePersona} <br />
                            <strong>Nombre de la Mascota:</strong> {usuario.nombreMascota} <br />
                            <strong>Tipo de Mascota</strong> {usuario.tipoMascota} <br />
                            <strong>Edad de la Mascota</strong> {usuario.edadMascota}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay usuarios registrados.</p>
            )}

            </main>
        </div>
    );
}

export default VerUsuarios;

