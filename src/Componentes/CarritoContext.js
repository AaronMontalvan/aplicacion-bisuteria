import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CarritoContext = createContext();

// Hook personalizado para usar el contexto
export const useCarrito = () => useContext(CarritoContext);

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + producto.quantity }
            : item
        )
      );
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, { ...producto, quantity: producto.quantity }]);
    }
  };

  // Actualizar cantidad de un producto en el carrito
  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === id ? { ...producto, quantity: cantidad } : producto
      )
    );
  };

  // Eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };

  // Limpiar el carrito
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        actualizarCantidad,
        eliminarDelCarrito,
        limpiarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
