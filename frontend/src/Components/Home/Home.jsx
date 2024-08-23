import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { FaBox, FaBuilding, FaArrowDown, FaArrowUp, FaClipboardList, FaFileAlt, FaPlus, FaUserCheck } from 'react-icons/fa';
import ListadoDisponibilidad from '../ListadoDisponibilidad/ListadoDisponibilidad.jsx';
import { Link } from 'react-router-dom';

export default function Home({ items, onModify, onDelete, searchTerm }) {

  return (
    <Container fluid className="grid-container">
      <aside className="sidebar">
        <h2 className='titulo-slidebar'>Home</h2>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/items">
            <FaBox className="me-2" />
            Items
          </Nav.Link>
          <Nav.Link href="#entidades">
            <FaBuilding className="me-2" />
            Entidades
          </Nav.Link>
          <Nav.Link href="#personas">
            <FaUserCheck className="me-2" />
            Personas
          </Nav.Link>
        </Nav>
        <Nav className="flex-column mt-3">
          <Nav.Link as={Link} to="/entrada">
            <FaArrowDown className="me-2" />
            Entrada
          </Nav.Link>
          <Nav.Link href="#salida">
            <FaArrowUp className="me-2" />
            Salida
          </Nav.Link>
          <Nav.Link href="#orden">
            <FaClipboardList className="me-2" />
            Orden
          </Nav.Link>
        </Nav>
        <Nav className="flex-column mt-3">
          <Nav.Link href="#reportes">
            <FaFileAlt className="me-2" />
            Reportes
          </Nav.Link>
        </Nav>
      </aside>
      <main className="main-content">
        <h1>Sistema de Stock General</h1>
        <div className='bottons-home'>
          <Link to="/entrada">
            <Button variant="primary" className='m-1'>
              <FaPlus className='me-2' />
              Nueva Entrada
            </Button>
          </Link>
          <Button variant="primary" className='m-1'>
            <FaPlus className='me-2' />
            Nueva Salida
          </Button>
          <Button variant="primary" className='m-1'>
            <FaPlus className='me-2' />
            Nueva Orden
          </Button>
        </div>
        <div>
          <ListadoDisponibilidad
            ItemsDisponibles={items}
            onModify={onModify}
            onDelete={onDelete}
            searchTerm={searchTerm}
          />
        </div>
      </main>
    </Container>
  );
}
