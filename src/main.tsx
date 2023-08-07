import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.tsx';
import Rotas from "./Rotas";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
      <Rotas />
      <GlobalStyle />
  </AuthProvider>
)