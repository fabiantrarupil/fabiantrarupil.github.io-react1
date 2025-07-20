import React, { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar la pizza

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        // Endpoint fijo por ahora, como indica el requerimiento [cite: 80, 81]
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data); // Actualiza el estado con los datos de la pizza
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Cargando pizza...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.imagen} alt={pizza.nombre} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.nombre}</h2> {/* Nombre de la pizza [cite: 83] */}
          <p>Precio: ${pizza.precio}</p> {/* Precio de la pizza [cite: 84] */}
          <p>Ingredientes: {pizza.ingredientes.join(', ')}</p> {/* Ingredientes de la pizza [cite: 87] */}
          <p>Descripción: {pizza.descripcion}</p> {/* Descripción de la pizza [cite: 88] */}
          <button className="btn btn-primary">Añadir al carrito</button> {/* Sin funcionalidad  */}
        </div>
      </div>
    </div>
  );
};

export default Pizza;