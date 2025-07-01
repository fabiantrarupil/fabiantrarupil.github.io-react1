import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage'; // Importar RegisterPage
import LoginPage from './components/LoginPage';       // Importar LoginPage
import './App.css';

function App() {
  // Para la Tarea II, comenta Home y descomenta RegisterPage o LoginPage según necesites probar.
  // Primero, descomenta RegisterPage para probar el formulario de registro.
  // Luego, comenta RegisterPage y descomenta LoginPage para probar el de login.

  return (
    <>
      <Navbar />
      {/* <Home /> */}

      <RegisterPage />

      <LoginPage />

      <Footer />
    </>
  );
}

export default App;