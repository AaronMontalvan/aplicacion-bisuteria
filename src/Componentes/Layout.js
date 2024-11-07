import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.jpeg';
import whatsappIcon from '../Images/whatsap.png';
import tiendaIcon from '../Images/shop.png';

function Layout() {
  return (
    <div>
      {/* Barra de navegación */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid d-flex align-items-center">
        <img src={tiendaIcon} alt="Shop Icon" style={{ width: '30px', marginRight: '8px' }} />
        <Link className="navbar-brand" to="/">TIENDA IWANKARAYA HANDCRAFT</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/informacion">Acerca de</Link>
            </li>
        </ul>
        </div>
        {/* Iconos de redes sociales */}
        <div className="d-flex align-items-center me-3">
        <a href="https://www.facebook.com/share/SXdwxWcbpENr1NZm/" target="_blank" rel="noopener noreferrer" className="me-2">
            <img src={facebookIcon} alt="Facebook" style={{ width: '24px' }} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-2">
            <img src={instagramIcon} alt="Instagram" style={{ width: '24px' }} />
        </a>
        <a href="https://wa.me/77771800" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px' }} />
        </a>
        </div>
    </div>
    </nav>


      {/* Contenido de la página */}
      <main>
        <Outlet />
      </main>

      {/* Pie de página */}
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
          &copy; 2024 IWANKARAYA HANDCRAFT | Granada, Nicaragua
        </div>
      </footer>
    </div>
  );
}

export default Layout;
