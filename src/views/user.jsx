import React from "react";
import MenuAppBar from "../components/MenuAppBar";
import Mantenimientoview from "./Mantenimiento";
import Activosview from "./Activos";
import Inventarioview from "./Inventario";
import Reportes from "./reportes"
import Personal  from "./personal"
import Tercerizacion from "./tercerizacion"
import { Routes, Route } from "react-router-dom";
export default function Userview() {

return(
    <>
        <MenuAppBar />
        <Routes>
        <Route path="/activos" element={<Activosview />} />
        <Route path="/inventario" element={<Inventarioview />} />
        <Route path="/mantenimiento" element={<Mantenimientoview />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/tercerizacion" element={<Tercerizacion />} />
        <Route path="/personal" element={<Personal />} />
        </Routes>

    </>
);

}