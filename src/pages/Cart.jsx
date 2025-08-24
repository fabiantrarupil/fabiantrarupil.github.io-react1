import React, { useState } from 'react';
import { pizzaCart as carritoPizzasInicial } from '../pizzas';

function Cart() {

  const [carrito, setCarrito] = useState(carritoPizzasInicial);

  // Función para incrementar la cantidad de una pizza
  const aumentarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Función para decrementar la cantidad de una pizza
  const disminuirCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      ).filter(item => item.cantidad > 0) // Eliminar si la cantidad llega a 0
    );
  };

  // Calcular el total de la compra
  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
  const totalFormateado = total.toLocaleString('es-CL');

  return (
    <div className="container my-4">
      <h2 className="mb-4">Detalles del pedido:</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío. ¡Agrega algunas pizzas!</p>
      ) : (
        <ul className="list-group mb-4">
          {carrito.map((pizza) => (
            <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={pizza.imagen} alt={pizza.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px', borderRadius: '5px' }} />
                <h5>{pizza.nombre}</h5>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3">${pizza.precio.toLocaleString('es-CL')}</span>
                <button
                  className="btn btn-outline-danger btn-sm me-2"
                  onClick={() => disminuirCantidad(pizza.id)}
                >
                  -
                </button>
                <span className="mx-2">{pizza.cantidad}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => aumentarCantidad(pizza.id)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="d-flex justify-content-end align-items-center mb-4">
        <h3>Total: ${totalFormateado}</h3> 
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-primary btn-lg" onClick={() => alert('Función de pago aún no implementada')}>
          Pagar
        </button>
      </div>
    </div>
  );
}

export default Cart;