import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {

  const formattedPrice = price.toLocaleString('es-CL');

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Ingredientes:</strong>
            <ul>
              {ingredients.map((ingredient, index) => (

                <li key={index}>{ingredient}</li>
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