import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <h1>404 - Extraviado en el Borde Exterior</h1>
      <p style={{ marginTop: '1rem' }}>Esta no es la página que estás buscando.</p>
      <Link to="/" style={{ marginTop: '2rem', color: 'var(--color-accent-gold)' }}>Regresar al HoloNet</Link>
    </div>
  );
};

export default NotFoundPage;
