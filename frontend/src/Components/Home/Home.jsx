import React from 'react';
import { Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';

export default function Home() {
  return (
    <Container fluid className=" grid-container">
      <aside className="sidebar">
        <h2>Home</h2>
        <Nav className="flex-column">
          <Nav.Link href="#items">Items</Nav.Link>
          <Nav.Link href="#entidades">Entidades</Nav.Link>
        </Nav>
        <Nav className="flex-column mt-3">
          <Nav.Link href="#entrada">Entrada</Nav.Link>
          <Nav.Link href="#salida">Salida</Nav.Link>
          <Nav.Link href="#orden">Orden</Nav.Link>
        </Nav>
        <Nav className="flex-column mt-3">
          <Nav.Link href="#reportes">Reportes</Nav.Link>
        </Nav>
      </aside>
      <main className="main-content">
        <h1>Sistema de Stock General</h1>
        <div className='bottons-home'>
            <Button variant="primary" className='m-1'>+ Nueva Entrada</Button>{' '}
            <Button variant="primary" className='m-1'>+ Nueva Salida</Button>{' '}
            <Button variant="primary" className='m-1'>+ Nueva Orden</Button>{' '}
        </div>
      <div>

        <h2>Listado</h2>
        
      </div>

      </main>
    </Container>
  );
}
