import React from 'react';
import Products from '../Productos.json'; // Importa el archivo JSON

function Productos() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  };

  const productCardStyle = {
    width: '200px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const productNameStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  };

  const productPriceStyle = {
    fontSize: '16px',
    color: '#007bff',
  };

  return (
    <div style={containerStyle}>
      {Products.map((producto) => (
        <div key={producto.id} style={productCardStyle}>
          <img src={producto.image} alt={producto.nombre} style={imageStyle} />
          <h3 style={productNameStyle}>{producto.nombre}</h3>
          <p style={productPriceStyle}>${producto.precio}</p>
          <p>{producto.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Productos;
