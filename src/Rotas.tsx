import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import  {App}  from './pages/App'
import Login from "./pages/Login";


const Rotas = () => {
    return (
        <div >
          <BrowserRouter>
              <Routes>
                {/* Componente da tela inicial */}
                <Route path="/" element={<App />} />

                {/* Componente de uma rota específica */}
                <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default Rotas;
