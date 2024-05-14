import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GalleryPage1 from './components/GalleryPage1';
import GalleryPage2 from './components/GalleryPage2';
import GalleryPage3 from './components/GalleryPage3';
import GalleryPage4 from './components/GalleryPage4';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery1" element={<GalleryPage1 />} />
        <Route path="/gallery2" element={<GalleryPage2 />} />
        <Route path="/gallery3" element={<GalleryPage3 />} />
        <Route path="/gallery4" element={<GalleryPage4 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
