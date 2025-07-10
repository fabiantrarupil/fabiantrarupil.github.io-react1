import React from 'react';


const CardPizza = ({ id, nombre, precio, ingredientes, imagen }) => {

  const formattedPrice = precio.toLocaleString('es-CL');

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={nombre} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            <strong>Ingredientes:</strong>
            <ul>
              {ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </p>
          <h6 className="mt-auto">Precio: ${formattedPrice}</h6>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary btn-sm">Ver Más</button>
            <button className="btn btn-primary btn-sm">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;