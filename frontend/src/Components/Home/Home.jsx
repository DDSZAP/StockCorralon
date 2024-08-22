import React, {useState} from 'react';
import { Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { FaBox, FaBuilding, FaArrowDown, FaArrowUp, FaClipboardList, FaFileAlt,FaPlus, FaUserCheck } from 'react-icons/fa';
import ListadoDisponibilidad from '../ListadoDisponibilidad/ListadoDisponibilidad.jsx';
import {Link} from 'react-router-dom'

export default function Home() {
    const[items,setItems] = useState([
      { id: 1, nombre: 'Cemento', descripcion: 'Bolsa de cemento 50kg', stock: 20, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 2, nombre: 'Arena', descripcion: 'Bolsa de arena 50kg', stock: 15, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 3, nombre: 'Ladrillos', descripcion: 'Ladrillo hueco 12x18x33', stock: 500, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 4, nombre: 'Hierro', descripcion: 'Varilla de hierro 6mm', stock: 300, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 5, nombre: 'Cal', descripcion: 'Bolsa de cal 25kg', stock: 50, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 6, nombre: 'Grava', descripcion: 'Bolsa de grava 50kg', stock: 40, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 7, nombre: 'Pintura', descripcion: 'Lata de pintura blanca 10L', stock: 60, categoria: 'Materiales', subcategoria: 'Pinturas' },
      { id: 8, nombre: 'Yeso', descripcion: 'Bolsa de yeso 20kg', stock: 80, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 9, nombre: 'Tejas', descripcion: 'Teja colonial', stock: 200, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 10, nombre: 'Aditivo impermeabilizante', descripcion: 'Botella de 1L', stock: 30, categoria: 'Materiales', subcategoria: 'Químicos' },
      { id: 11, nombre: 'Cemento cola', descripcion: 'Bolsa de 25kg', stock: 100, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 12, nombre: 'Madera', descripcion: 'Tablón de pino 2x4', stock: 150, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 13, nombre: 'Clavos', descripcion: 'Caja de clavos 1kg', stock: 500, categoria: 'Materiales', subcategoria: 'Ferretería' },
      { id: 14, nombre: 'Tornillos', descripcion: 'Caja de tornillos 1kg', stock: 450, categoria: 'Materiales', subcategoria: 'Ferretería' },
      { id: 15, nombre: 'Cañería PVC', descripcion: 'Cañería PVC 2 pulgadas', stock: 100, categoria: 'Materiales', subcategoria: 'Plomería' },
      { id: 16, nombre: 'Cable eléctrico', descripcion: 'Rollo de cable 100m', stock: 75, categoria: 'Materiales', subcategoria: 'Electricidad' },
      { id: 17, nombre: 'Llave inglesa', descripcion: 'Llave inglesa 12 pulgadas', stock: 35, categoria: 'Herramientas', subcategoria: 'Manuales' },
      { id: 18, nombre: 'Martillo', descripcion: 'Martillo carpintero', stock: 40, categoria: 'Herramientas', subcategoria: 'Manuales' },
      { id: 19, nombre: 'Taladro', descripcion: 'Taladro eléctrico', stock: 20, categoria: 'Herramientas', subcategoria: 'Eléctricas' },
      { id: 20, nombre: 'Lija', descripcion: 'Papel de lija grano 120', stock: 200, categoria: 'Materiales', subcategoria: 'Pinturas' },
      { id: 21, nombre: 'Pala', descripcion: 'Pala ancha', stock: 25, categoria: 'Herramientas', subcategoria: 'Manuales' },
      { id: 22, nombre: 'Cinta métrica', descripcion: 'Cinta métrica 5m', stock: 70, categoria: 'Herramientas', subcategoria: 'Manuales' },
      { id: 23, nombre: 'Sierra', descripcion: 'Sierra manual', stock: 30, categoria: 'Herramientas', subcategoria: 'Manuales' },
      { id: 24, nombre: 'Espejo', descripcion: 'Espejo de baño 60x80cm', stock: 50, categoria: 'Materiales', subcategoria: 'Baños' },
      { id: 25, nombre: 'Azulejos', descripcion: 'Azulejos 20x20cm', stock: 250, categoria: 'Materiales', subcategoria: 'Baños' },
      { id: 26, nombre: 'Cemento rápido', descripcion: 'Bolsa de cemento rápido 5kg', stock: 100, categoria: 'Materiales', subcategoria: 'Construcción' },
      { id: 27, nombre: 'Válvula de agua', descripcion: 'Válvula de agua 1 pulgada', stock: 70, categoria: 'Materiales', subcategoria: 'Plomería' },
      { id: 28, nombre: 'Llaves de paso', descripcion: 'Llave de paso 1 pulgada', stock: 60, categoria: 'Materiales', subcategoria: 'Plomería' },
      { id: 29, nombre: 'Tubería de cobre', descripcion: 'Tubería de cobre 1 pulgada', stock: 50, categoria: 'Materiales', subcategoria: 'Plomería' },
      { id: 30, nombre: 'Masilla', descripcion: 'Bote de masilla 1kg', stock: 100, categoria: 'Materiales', subcategoria: 'Pinturas' }
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
        <Nav.Link href="#entidades">
          <FaUserCheck className="me-2" /> {/* Ícono de edificio para "Entidades" */}
          Personas
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
