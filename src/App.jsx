import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import { Home } from "./pages/Home";
import Materiales from "./pages/Materiales";
import NavbarComponent from "./components/NavbarComponent";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <>
    {/* Integracion del navbar en todas las secciones de la pagina  */}
      <NavbarComponent />
        {/* Definicion de rutas  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="materiales" element={<Materiales />}></Route>
        <Route path="servicios" element={<Servicios />}></Route>
      </Routes>
    </>
  );
}

export default App;
