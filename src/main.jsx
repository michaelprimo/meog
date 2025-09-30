import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // 👈 Importa BrowserRouter
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <HelmetProvider>
      <App />
    </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
