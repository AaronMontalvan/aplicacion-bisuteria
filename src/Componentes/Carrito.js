import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useCarrito } from './CarritoContext';
import { useNavigate } from 'react-router-dom'; // Para redirigir a otra página

function Carrito() {
  const { carrito, actualizarCantidad, eliminarDelCarrito } = useCarrito();
  const navigate = useNavigate(); // Hook de navegación
  const [error, setError] = useState('');

  const calcularSubtotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.quantity, 0);
  };

  // Función para redirigir a la página de productos
  const irAProductos = () => {
    navigate('/productos'); // Redirige a la página de productos
  };

  const handleQuantityChange = (e, productoId) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);

    // Validar que el valor sea un número mayor a 0
    if (!isNaN(parsedValue) && parsedValue > 0) {
      actualizarCantidad(productoId, parsedValue);
      setError('');
    } else if (value === '') {
      // Si el campo está vacío, se permite
      actualizarCantidad(productoId, '');
      setError('La cantidad debe ser un número mayor a 0');
    } else {
      setError('La cantidad debe ser un número mayor a 0');
    }
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      style={{ backgroundColor: '#f0f0f0', gap: '20px' }}
    >
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Carrito de Compras</h2>

        {/* Mostrar el botón solo si el carrito tiene productos */}
        {carrito.length > 0 && (
          <Button 
            variant="primary" 
            className="mb-4"
            onClick={irAProductos}
          >
            Elegir más Productos
          </Button>
        )}

        {carrito.length === 0 ? (
          <p className="text-center">Tu carrito está vacío. ¡Añade productos para empezar!</p>
        ) : (
          <div className="row">
            {/* Lista de productos en el carrito */}
            <div className="col-md-8">
              {carrito.map((producto, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center p-3 mb-3 border rounded shadow-sm"
                  style={{ backgroundColor: '#fff' }}
                >
                  <img
                    src={producto.image}
                    alt={producto.nombre}
                    className="rounded"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{producto.nombre}</h5>
                    <p className="text-muted mb-1">{producto.descripcion}</p>
                    <p className="mb-0">
                      Precio Unitario: <strong>C${producto.precio.toFixed(2)}</strong>
                    </p>
                    <div className="d-flex align-items-center">
                      <label className="mr-2">Cantidad:</label>
                      <input
                        type="number"
                        value={producto.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(e, producto.id)}
                        style={{ width: '60px', marginRight: '10px' }}
                      />
                    </div>
                    <p>
                      Subtotal: <strong>C${(producto.precio * producto.quantity).toFixed(2)}</strong>
                    </p>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si hay */}
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarDelCarrito(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            {/* Resumen del pedido */}
            <div className="col-md-4">
              <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                <h5>Resumen del Pedido</h5>
                <hr />
                <p className="d-flex justify-content-between">
                  <span>Subtotal:</span> <strong>C${calcularSubtotal().toFixed(2)}</strong>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Impuestos (15%):</span>{' '}
                  <strong>C${(calcularSubtotal() * 0.15).toFixed(2)}</strong>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  <span>Total:</span>{' '}
                  <strong style={{ color: '#007bff', fontSize: '18px' }}>
                    C${(calcularSubtotal() * 1.15).toFixed(2)}
                  </strong>
                </p>
                <Button
                  variant="success"
                  className="btn-block mt-3"
                  size="lg"
                  onClick={() => console.log('Ir a pagar')}
                >
                  Proceder al Pago
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrito;
