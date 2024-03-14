import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Domů</Link>
      <span> | </span>
      <Link to="/about">O nás</Link>
      <span> | </span>
      <Link to="/centers">Pobočky</Link>
      <span> | </span>
      <Link to="/contact">Kontakt</Link>
    </nav>
  )
}
