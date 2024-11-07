import React from 'react';

function Mapa() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    border: 'none',
  };

  return (
    <div className="container my-5">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550.8801265450675!2d-85.95708155592672!3d11.931929205369014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c939ac20731%3A0x62ec62d81291a1e9!2sCuerpo%20de%20Bomberos%20De%20Granada%20-%20Claudia%20Chamorro!5e0!3m2!1ses!2sni!4v1730576604655!5m2!1ses!2sni"
          title="Ubicación IWANKARAYA HANDCRAFT"
          style={mapContainerStyle}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Mapa;
