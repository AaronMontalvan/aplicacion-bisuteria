import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TerminosYCondiciones() {
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      style={{ backgroundColor: '#f0f0f0', gap: '20px' }}
    >
    <div className="container mt-5">
      <h1 className="text-center mb-4">Términos y Condiciones</h1>
      <p className="text-justify">
        Bienvenido a IWANKARAYA HANDCRAFT. Al utilizar este sitio web y realizar compras, aceptas los siguientes Términos y Condiciones. 
        Por favor, léelos cuidadosamente antes de realizar cualquier transacción.
      </p>

      <h2>1. Condiciones de Compra</h2>
      <p>
        Todos los pedidos realizados a través de nuestro sitio web están sujetos a disponibilidad de stock. Nos reservamos el 
        derecho de rechazar o cancelar cualquier pedido si los productos no están disponibles, si detectamos errores en la información 
        del pedido o si el cliente no cumple con los requisitos para realizar la compra.
      </p>

      <h2>2. Proceso de Cancelación</h2>
      <p>
        Puedes solicitar la cancelación de tu pedido antes de que sea procesado y enviado. Para ello, debes comunicarte con nosotros 
        a través de nuestro formulario de contacto o número de atención al cliente, indicando el número de tu pedido. 
        Una vez que el pedido ha sido enviado, no será posible cancelarlo, pero puedes optar por el proceso de devolución.
      </p>

      <h2>3. Política de Devoluciones</h2>
      <p>
        Las devoluciones serán aceptadas únicamente en las siguientes condiciones:
      </p>
      <ul>
        <li>El producto recibido está defectuoso o dañado.</li>
        <li>El producto no coincide con la descripción o especificaciones indicadas en el sitio web.</li>
        <li>La solicitud de devolución se realiza dentro de los <strong>7 días</strong> posteriores a la recepción del producto.</li>
      </ul>
      <p>
        Para iniciar una devolución, debes ponerte en contacto con nuestro equipo de soporte proporcionando evidencia 
        (como fotografías del producto) y el número del pedido. Los productos deben devolverse en su empaque original y 
        sin signos de uso indebido.
      </p>

      <h2>4. Política de Reembolsos</h2>
      <p>
        Una vez que hayamos recibido y evaluado el producto devuelto, te notificaremos la aprobación o rechazo del reembolso. 
        Los reembolsos aprobados se procesarán de la siguiente manera:
      </p>
      <ul>
        <li>Si pagaste con tarjeta de crédito o débito, el reembolso será emitido a la misma tarjeta dentro de un plazo de 5 a 10 días hábiles.</li>
        <li>Si pagaste mediante transferencia bancaria, se te pedirá una cuenta bancaria válida para procesar el reembolso.</li>
      </ul>
      <p>
        Nota: Los costos de envío no son reembolsables a menos que la devolución sea resultado de un error por nuestra parte.
      </p>

      <h2>5. Cambios en los Términos y Condiciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será 
        publicado en esta página y entrará en vigor inmediatamente. Te recomendamos revisar esta página periódicamente 
        para estar informado sobre posibles actualizaciones.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes preguntas sobre estos Términos y Condiciones, nuestra política de devoluciones o cualquier otro asunto relacionado, 
        puedes <a href="/informacion">contactarnos aquí</a>.
      </p>
    </div>
    </div>
  );
}

export default TerminosYCondiciones;
