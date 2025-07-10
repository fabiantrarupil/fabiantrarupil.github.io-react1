import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart'; // Importamos el componente Cart
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home /> {/* Activar para mostrar las pizzas */}
      {/* <Cart /> */} {/* Descomentar para mostrar el carrito */}

      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}

      <Footer />
    </>
  );
}

export default App;