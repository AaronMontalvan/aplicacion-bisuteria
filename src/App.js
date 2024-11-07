import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Bienvenida from './Componentes/Bienvenida';
import Informacion from './Componentes/Informacion';
import Productos from './Componentes/Productos';
import Layout from './Componentes/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bienvenida />} /> {/* Página principal */}
          <Route path="informacion" element={<Informacion />} />
          <Route path="productos" element={<Productos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
