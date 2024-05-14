import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Buster's Memorial</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery1">Gallery 1</Link>
        <Link to="/gallery2">Gallery 2</Link>
        <Link to="/gallery3">Gallery 3</Link>
        <Link to="/gallery4">Gallery 4</Link>
      </nav>
    </header>
  );
}

export default Header;
