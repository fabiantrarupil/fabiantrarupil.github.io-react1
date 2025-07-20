import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import RegisterPage from './components/RegisterPage'; // Puedes mantenerlos comentados
// import LoginPage from './components/LoginPage'; // Puedes mantenerlos comentados
// import Cart from './components/Cart'; // Comenta esta línea
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Home /> {/* Descomenta esta línea */}

      {/* <Cart /> */} {/* Mueve Cart aquí y coméntalo */}

      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}

      <Footer />
    </>
  );
}

export default App;