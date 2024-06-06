import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Error404 from "./pages/error404/error404.jsx";
import Contact from "./pages/contact/contact.jsx";
import Projets from "./pages/projets/projets.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="contact" element={<Contact />}/>
       <Route path="projets" element={<Projets/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;