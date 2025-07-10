import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas'; // Importamos el array de pizzas

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id} // Es importante usar una key única cuando se renderizan listas
              nombre={pizza.nombre}
              precio={pizza.precio}
              ingredientes={pizza.ingredientes}
              imagen={pizza.imagen}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;