import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bienvenida from './Componentes/Bienvenida';
import Informacion from './Componentes/Informacion';
import Productos from './Componentes/Productos';
import Layout from './Componentes/Layout';
import { CarritoProvider } from './Componentes/CarritoContext';
import Carrito from './Componentes/Carrito';
import PoliticaDePrivacidad from './Componentes/PoliticaDePrivacidad';
import TerminosYCondiciones from './Componentes/TerminosYCondiciones';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Bienvenida />} />
            <Route path="informacion" element={<Informacion />} />
            <Route path="productos" element={<Productos />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
            <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
          </Route>
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
