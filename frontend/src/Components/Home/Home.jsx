import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';

export default function Home() {
  return (
    <Container fluid className=" grid-container">
      <aside className="sidebar">
        <h3>Home</h3>
        <div>
            <div>Items</div>
            <div>Entidades</div>
        </div>
        <div>
            <div>Entrada</div>
            <div>Salida</div>
            <div>Orden</div>
        </div>
        <div>
            <div>Reportes</div>
            <div>Configuración</div>
        </div>
      </aside>
      <main className="main-content">
        <h3>Sistema de Stock General</h3>
        <div className='bottons-home'>
            <Button variant="primary" className='m-1'>+ Nueva Entrada</Button>{' '}
            <Button variant="primary" className='m-1'>+ Nueva Salida</Button>{' '}
            <Button variant="primary" className='m-1'>+ Nueva Orden</Button>{' '}
        </div>
      </main>
    </Container>
  );
}
