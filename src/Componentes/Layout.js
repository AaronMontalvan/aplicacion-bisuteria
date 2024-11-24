import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookIcon from '../Images/facebook.png';
import instagramIcon from '../Images/instagram.jpeg';
import whatsappIcon from '../Images/whatsap.png';
import tiendaIcon from '../Images/shop.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza al inicio
  }, [pathname]);

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
                <Link className="nav-link" to="/carrito">Carrito 🛒</Link>
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
      <footer style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container p-4">
          <div className="row">
            {/* Información general */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="text-uppercase">IWANKARAYA HANDCRAFT</h5>
              <p>
                Tienda de bisutería y vestuario típico ubicada en Granada, Nicaragua.
                Ofrecemos productos únicos hechos a mano con amor y dedicación.
              </p>
            </div>

            {/* Enlaces útiles */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Enlaces</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/politica-de-privacidad" className="text-dark text-decoration-none">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terminos-y-condiciones" className="text-dark text-decoration-none">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/informacion" className="text-dark text-decoration-none">
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Síguenos</h5>
              <div className="d-flex justify-content-start">
                <a href="https://www.facebook.com/share/SXdwxWcbpENr1NZm/" target="_blank" rel="noopener noreferrer" className="me-3">
                  <img src={facebookIcon} alt="Facebook" style={{ width: '32px' }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <img src={instagramIcon} alt="Instagram" style={{ width: '32px' }} />
                </a>
                <a href="https://wa.me/77771800" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-3">
          &copy; 2024 IWANKARAYA HANDCRAFT | Granada, Nicaragua
        </div>
      </footer>
    </div>
  );
}

export default Layout;
