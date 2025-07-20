// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

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
              // Asegúrate de que los nombres de las props aquí coincidan con el JSON y CardPizza.jsx
              price={pizza.price} // Cambiado de 'precio' a 'price'
              ingredients={pizza.ingredients} // Cambiado de 'ingredientes' a 'ingredients'
              img={pizza.img} // Asumo que la imagen viene como 'img'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;