import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import RegistrarUsuario from "./components/RegistrarUsuario";
import RegistrarCita from "./components/RegistrarCita";
import VerUsuarios from "./components/VerUsuarios";
import VerCitas from "./components/VerCitas";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
                <Route path="/registrar-cita" element={<RegistrarCita />} />
                <Route path="/ver-usuarios" element={<VerUsuarios />} />
                <Route path="/ver-citas" element={<VerCitas />} />
            </Routes>
        </Router>
    );
}

export default App;