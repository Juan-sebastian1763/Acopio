import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import { Home } from "./pages/Home";
import Materiales from "./pages/Materiales";
import NavbarComponent from "./components/NavbarComponent";
import Servicios from "./pages/Servicios";
import MaterialesDetails from "./pages/Detallesmateriales/MaterialesDetails";
import AdquisicionMateriales from "./pages/Adquisicion/AdquisicionMaterial";

function App() {
  return (
    <>
      <div className="fondo container-app">
        {/* Integracion del navbar en todas las secciones de la pagina  */}
        <NavbarComponent />
        {/* Definicion de rutas  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="materiales" element={<Materiales />}></Route>
          <Route path="servicios" element={<Servicios />}></Route>
          <Route path="materiales/:id" element={<MaterialesDetails />}></Route>
          <Route
            path="materiales/:id/adquirir"
            element={<AdquisicionMateriales />}
          ></Route>
          <Route path="*"></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
