import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas'; 

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">

          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id} 
              id={pizza.id} 
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