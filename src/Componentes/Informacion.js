import React from 'react';
import Mapa from './Mapa';

function Informacion() {
  const sectionsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  };

  const sectionStyle = {
    flex: '1',
    margin: '0 10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    fontSize: '1.2em',
    marginBottom: '15px',
    color: '#333',
  };

  const sectionTextStyle = {
    lineHeight: '1.5',
    color: '#555',
  };

  return (
    <div
    className="d-flex flex-wrap justify-content-center p-3"
    style={{ backgroundColor: '#f0f0f0', gap: '20px' }}
    >
    <div className="container mt-5" >
      <h1 className="text-center mb-4" >Acerca de Nosotros</h1>
      <p className="text-justify">
        IWANKARAYA HANDCRAFT es una tienda de bisutería y vestuario típico, ofrece una gran variedad de productos, está ubicada en Granada.
        Se producen bisuterías auténticas hechas de materiales como conchas, perlas y materiales llenos de color que son atractivos a nuestros clientes, 
        además de ofrecer vestimentas como cotonas, monos, faldas y más. Este proyecto busca poder aportar a la economía del país y nuestro bolsillo, 
        además de reconocer la gran labor de la mano de obra nicaragüense generando empleos y oportunidades de crecimiento.
      </p>
      <p>
        La estrategia de marketing tiene como objetivo posicionar a IWANKARAYA HANDCRAFT como la mejor tienda de bisutería 
        y vestuario típico de Granada. Usando la estrategia de precios bajos por introducción al mercado, el objetivo de nuestra
        estrategia es establecernos en el mercado con precios menores a los de nuestra competencia y rentables para nuestra sostenibilidad.
      </p>
      <h2>Contacanos</h2>
      <p>Para cualquier informacion contactarnos por medio de lo siguiente:</p>
      <ul>
        <li>Número de WhatsApp: 77771800</li>
        <li>Facebook: Iwankaraya Handcraft</li>
      </ul>
      <h1>Localización</h1>
      <p>
        Nuestra tienda IWANKARAYA HANDCRAFT estará establecida en el costado oeste de la estación de bomberos, calle 14 de septiembre de la ciudad de Granada en el municipio de Granada.
      </p>
      <Mapa />

      {/* Secciones horizontales */}
      <div style={sectionsContainerStyle}>
        {/* Misión */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestra Misión</h2>
          <p style={sectionTextStyle}>
            Ofrecer productos de calidad que resalten la cultura y tradición nicaragüense, 
            generando empleo local y contribuyendo al crecimiento económico de nuestra comunidad.
          </p>
        </div>

        {/* Visión */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestra Visión</h2>
          <p style={sectionTextStyle}>
            Ser reconocidos como la tienda líder en bisutería y vestuario típico en Nicaragua, 
            destacándonos por nuestro compromiso con la calidad y la autenticidad cultural.
          </p>
        </div>

        {/* Valor Diferenciador */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestro Compromiso</h2>
          <p style={sectionTextStyle}>
            Promover prácticas sostenibles en la fabricación de nuestros productos, utilizando materiales locales y 
            respetando el medio ambiente mientras apoyamos el talento artesanal de nuestra región.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Informacion;
