import React, {useState} from 'react';
import { Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Home.css';
import ListadoDisponibilidad from '../ListadoDisponibilidad/ListadoDisponibilidad.jsx';



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
