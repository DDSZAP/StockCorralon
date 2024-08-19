import React, {useState} from 'react';
import { Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { FaBox, FaBuilding, FaArrowDown, FaArrowUp, FaClipboardList, FaFileAlt,FaPlus } from 'react-icons/fa';
import ListadoDisponibilidad from '../ListadoDisponibilidad/ListadoDisponibilidad.jsx';
import {Link} from 'react-router-dom'

export default function Home() {
    const[items,setItems] = useState([
      { id: 1, nombre: 'Cemento', descripcion: 'Bolsa de cemento 50kg', stock: 20, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 2, nombre: 'Arena', descripcion: 'Bolsa de arena 50kg', stock: 15, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 3, nombre: 'Ladrillos', descripcion: 'Ladrillo hueco 12x18x33', stock: 500, categoria: 'Materiales', subcategoria: 'Construcción' },
    ]);
    const handleModify = (article) => {
      // Lógica para modificar el artículo
      console.log("Modificar artículo:", article);
  };

  const handleDelete = (id) => {
      // Lógica para eliminar el artículo
      setItems(items.filter(item => item.id !== id));
      console.log("Eliminar artículo con id:", id);
  };

  return (
    <Container fluid className=" grid-container">
 <aside className="sidebar">
      <h2 className='titulo-slidebar'>Home</h2>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/Items">
          <FaBox className="me-2" /> {/* Ícono de caja para "Items" */}
          Items
        </Nav.Link>
        <Nav.Link href="#entidades">
          <FaBuilding className="me-2" /> {/* Ícono de edificio para "Entidades" */}
          Entidades
        </Nav.Link>
      </Nav>
      <Nav className="flex-column mt-3">
        <Nav.Link href="#entrada">
          <FaArrowDown className="me-2" /> {/* Ícono de flecha hacia abajo para "Entrada" */}
          Entrada
        </Nav.Link>
        <Nav.Link href="#salida">
          <FaArrowUp className="me-2" /> {/* Ícono de flecha hacia arriba para "Salida" */}
          Salida
        </Nav.Link>
        <Nav.Link href="#orden">
          <FaClipboardList className="me-2" /> {/* Ícono de lista para "Orden" */}
          Orden
        </Nav.Link>
      </Nav>
      <Nav className="flex-column mt-3">
        <Nav.Link href="#reportes">
          <FaFileAlt className="me-2" /> {/* Ícono de archivo para "Reportes" */}
          Reportes
        </Nav.Link>
      </Nav>
    </aside>
      <main className="main-content">
        <h1>Sistema de Stock General</h1>
        <div className='bottons-home'>
          <Button variant="primary" className='m-1'>
              <FaPlus className='me-2' />
              Nueva Entrada
          </Button>{' '}
          <Button variant="primary" className='m-1'>
              <FaPlus className='me-2' />
              Nueva Salida
          </Button>{' '}
          <Button variant="primary" className='m-1'>
              <FaPlus className='me-2' />
              Nueva Orden
          </Button>{' '}
        </div>
        <div>
          <ListadoDisponibilidad
            ItemsDisponibles={items} 
            onModify={handleModify} 
            onDelete={handleDelete} 
          />        
        </div>
      </main>
    </Container>
  );
}
