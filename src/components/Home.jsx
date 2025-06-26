import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" // [cite: 80]
          />
          <CardPizza
            name="Española" // [cite: 84]
            price={6950} // [cite: 85]
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} // [cite: 85]
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab" // [cite: 86]
          />
          <CardPizza
            name="Pepperoni" // [cite: 89]
            price={6950} // [cite: 90]
            ingredients={["mozzarella", "pepperoni", "orégano"]} // [cite: 91]
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" // [cite: 92]
          />
        </div>
      </div>
    </>
  );
};

export default Home;