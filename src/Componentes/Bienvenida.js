import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bienvenida.css';

function Bienvenida() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="/assets/imagen1.jpg" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="/assets/imagen2.jpg" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="/assets/imagen3.jpg" className="d-block w-100" alt="Imagen 3" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="/assets/imagen4.jpg" className="d-block w-100" alt="Imagen 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Bienvenida;
