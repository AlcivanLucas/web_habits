import React from "react";
import {Routes,Route} from "react-router-dom";
import { App } from './pages/App'
import Login from "./pages/Login";


const Rotas = () => {
    return (
        <div className="App">
          <Routes>
            {/* Componente da tela inicial */}
            <Route index element={<App />} />

            {/* Componente de uma rota específica */}
            <Route path="login" element={<Login />} />
            
            {/* Componente para quando não encontrar uma rota
            <Route path="*" element={<NotFound />}  */}
          </Routes>
        </div>
      );
}

export default Rotas;