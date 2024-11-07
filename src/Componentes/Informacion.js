import React from 'react';
import Mapa from './Mapa';

function Informacion() {
  const containerStyle = {
    padding: '50px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    textAlign: 'left',
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Acerca de Nosotros</h1>
      <p style={paragraphStyle}>
        IWANKARAYA HANDCRAFT es una tienda de bisutería y vestuario típico, ofrece una gran variedad de productos, está ubicada en Granada.
        Se producen bisuterías auténticas hechas de materiales como conchas, perlas y materiales llenos de color que son atractivos a nuestros clientes, 
        además de ofrecer vestimentas como cotonas, monos, faldas y más. Este proyecto busca poder aportar a la economía del país y nuestro bolsillo, 
        además de reconocer la gran labor de la mano de obra nicaragüense generando empleos y oportunidades de crecimiento.
      </p>
      <p style={paragraphStyle}>
        La estrategia de marketing tiene como objetivo posicionar a IWANKARAYA HANDCRAFT como la mejor tienda de bisutería 
        y vestuario típico de Granada. Usando la estrategia de precios bajos por introducción al mercado, el objetivo de nuestra
        estrategia es establecernos en el mercado con precios menores a los de nuestra competencia y rentables para nuestra sostenibilidad.
      </p>
      <h1 style={titleStyle}>Localización</h1>
      <p style={paragraphStyle}>
        Nuestra tienda IWANKARAYA HANDCRAFT estará establecida en el costado oeste de la estación de bomberos, calle 14 de septiembre de la ciudad de Granada en el municipio de Granada.
      </p>
      <Mapa />
    </div>
  );
}

export default Informacion;
