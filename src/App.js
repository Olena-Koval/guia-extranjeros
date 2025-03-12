// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tramites from './components/Tramites';
import Mapa from './components/Mapa';
import Ayudas from './components/Ayudas';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h2>Bienvenido a la Guía para Extranjeros en España</h2>} />
            <Route path="/tramites" element={<Tramites />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/ayudas" element={<Ayudas />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
