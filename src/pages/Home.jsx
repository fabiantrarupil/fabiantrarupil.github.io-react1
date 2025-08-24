import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../pizzas'; // Importa las pizzas directamente

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
              price={pizza.precio} // Usa 'precio' para que coincida con el objeto
              ingredients={pizza.ingredientes} // Usa 'ingredientes' para que coincida con el objeto
              img={pizza.imagen} // Usa 'imagen' para que coincida con el objeto
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;