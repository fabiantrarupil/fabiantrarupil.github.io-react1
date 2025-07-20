// src/components/CardPizza.jsx
import React from 'react';

// Cambia 'ingredientes' por 'ingredients' y 'precio' por 'price'
const CardPizza = ({ id, nombre, price, ingredients, img }) => { // Asumo que 'imagen' en tu JSON es 'img' o similar
  const formattedPrice = price ? price.toLocaleString('es-CL') : 'N/A'; // Usa 'price' aquí

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        {/* Usa 'img' aquí */}
        <img src={img} className="card-img-top" alt={nombre} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            <strong>Ingredientes:</strong>
          </p>
          <ul>
            {/* Usa 'ingredients' aquí */}
            {ingredients && Array.isArray(ingredients) ? (
              ingredients.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))
            ) : (
              <li>No hay ingredientes disponibles</li>
            )}
          </ul>
          {/* Usa 'formattedPrice' que usa 'price' */}
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