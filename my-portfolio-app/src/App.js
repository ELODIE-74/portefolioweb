import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/home/home.jsx';
import Error404 from './pages/error404/error404.jsx';
import Loader from './components/loader/loader.jsx'; // Importez le composant Loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simuler le chargement de la page
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajustez la durée de chargement selon vos besoins
  }, []);

  return (
    <Router>
      <Header />
      {isLoading && <Loader />} {/* Affichez le loader si isLoading est true */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;