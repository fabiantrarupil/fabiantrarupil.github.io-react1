import React from 'react';
import { useParams } from 'react-router-dom'; // Importa useParams
import { pizzas } from '../pizzas'; // Importa las pizzas directamente

const Pizza = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const pizza = pizzas.find(p => p.id.toLowerCase() === id.toLowerCase()); // Busca la pizza por ID

  if (!pizza) {
    return <div>Pizza no encontrada.</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.imagen} alt={pizza.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.nombre}</h2>
          <p>Precio: ${pizza.precio}</p>
          <p>Ingredientes: {pizza.ingredientes.join(', ')}</p>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;