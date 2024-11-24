import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PoliticaDePrivacidad() {
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      style={{ backgroundColor: '#f0f0f0', gap: '20px' }}
    >
    <div className="container mt-5">
      <h1 className="text-center mb-4">Política de Privacidad</h1>
      <p className="text-justify">
        En IWANKARAYA HANDCRAFT valoramos tu privacidad y estamos comprometidos a proteger tus datos personales.
        Esta política explica cómo recopilamos, usamos, y protegemos tu información cuando visitas nuestro sitio web o haces una compra.
      </p>
      <h2>1. Información que recopilamos</h2>
      <p>
        Podemos recopilar la siguiente información personal: tu nombre, dirección de correo electrónico, número de teléfono, y detalles
        de la dirección de envío. Además, recopilamos datos sobre tu interacción con nuestro sitio, como las páginas visitadas y los productos consultados.
      </p>
      <h2>2. Uso de tu información</h2>
      <p>La información recopilada se utiliza para:</p>
      <ul>
        <li>Procesar pedidos y gestionar envíos.</li>
        <li>Personalizar tu experiencia en nuestro sitio.</li>
        <li>Proporcionar atención al cliente de calidad.</li>
        <li>Enviar comunicaciones relacionadas con promociones y novedades.</li>
      </ul>
      <h2>3. Seguridad de tus datos</h2>
      <p>
        Empleamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado,
        pérdida o destrucción. Sin embargo, recuerda que ningún sistema es completamente seguro.
      </p>
      <h2>4. Tus derechos</h2>
      <p>
        Puedes solicitar acceso, modificación o eliminación de tus datos personales en cualquier momento poniéndote en contacto con nosotros.
      </p>
      <p className="mt-4">
        Si tienes preguntas o preocupaciones sobre esta política, no dudes en <a href="/informacion">contactarnos</a>.
      </p>
    </div>
    </div>
  );
}

export default PoliticaDePrivacidad;
