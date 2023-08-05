import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Rotas from "./Rotas";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
)