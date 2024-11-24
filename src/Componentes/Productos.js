import React, { useState } from 'react';
import Products from '../Productos.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCarrito } from './CarritoContext';
import '../Boton.css';

function Productos() {
  const { agregarAlCarrito } = useCarrito();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleAddToCart = (producto) => {
    setSelectedProduct(producto);
    setQuantity(1); // Inicializar cantidad en 1
    setError(''); // Limpiar error cuando se abre el modal
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    // Validar que la cantidad sea mayor que 0
    if (quantity <= 0) {
      setError('La cantidad debe ser un número mayor a 0');
    } else {
      agregarAlCarrito({ ...selectedProduct, quantity });
      setShowModal(false);
    }
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    // Si el campo está vacío, lo dejamos vacío
    if (value === '') {
      setQuantity('');
      setError('');
    } else {
      const parsedValue = parseInt(value, 10);

      // Si el valor es un número y mayor a 0
      if (!isNaN(parsedValue) && parsedValue > 0) {
        setQuantity(parsedValue);
        setError('');
      } else {
        setError('La cantidad debe ser un número mayor a 0');
      }
    }
  };

  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      style={{ backgroundColor: '#f0f0f0', gap: '20px' }}
    >
      {Products.map((producto) => (
        <div
          key={producto.id}
          className="card text-center"
          style={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <img
            src={producto.image}
            alt={producto.nombre}
            className="card-img-top"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          />
          <div className="card-body" style={{ flexGrow: 1 }}>
            <h3
              className="card-title"
              style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}
            >
              {producto.nombre}
            </h3>
            <p
              className="card-text"
              style={{ fontSize: '16px', color: '#007bff' }}
            >
              C${producto.precio}
            </p>
            <p>{producto.descripcion}</p>
          </div>
          <button
            className="custom-button"
            onClick={() => handleAddToCart(producto)}
          >
            🛒 Añadir al carrito
          </button>
        </div>
      ))}

      {/* Modal */}
      {selectedProduct && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar agregar al carrito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.nombre}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '10px',
                }}
              />
              <h3>{selectedProduct.nombre}</h3>
              <p>{selectedProduct.descripcion}</p>
              <p style={{ fontSize: '16px', color: '#007bff' }}>
                ${selectedProduct.precio}
              </p>
              <div>
                <label>Cantidad:</label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                  style={{
                    width: '60px',
                    marginLeft: '10px',
                    padding: '5px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si hay */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={confirmAddToCart}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Productos;
