//modificarItemModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function ModificarItemModal({ show, handleClose, item, onSave, categorias, subcategorias }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria_id:'',
    subcategoria_id:''
  });

  useEffect(() => {
    if (item) {
      setFormData({
        nombre: item.nombre,
        descripcion: item.descripcion,
        categoria_id: item.categoria_id || '',
        subcategoria_id: item.subcategoria_id || '',

      });
    }
  }, [item]);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const updatedItem = { ...item, ...formData };
      await axios.put(`http://10.0.0.17/stock-api/public/api/items/${item.id}`, updatedItem);
      onSave(updatedItem);  // Callback para actualizar el estado principal en el componente padre
      handleClose();
    } catch (error) {
      console.error('Error al modificar el item:', error.response ? error.response.data : error.message);
      
      alert('Hubo un error al modificar el item. Por favor, intenta de nuevo.');
    }
  };

  const filteredSubcategorias = subcategorias.filter(subcat => subcat.categoria_id === parseInt(formData.categoria_id))

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescripcion" className="mt-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCategoria" className="mt-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              name="categoria_id"
              value={formData.categoria_id}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formSubcategoria" className="mt-3">
            <Form.Label>Subcategoría</Form.Label>
            <Form.Control
              as="select"
              name="subcategoria_id"
              value={formData.subcategoria_id}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecciona una subcategoría</option>
              {filteredSubcategorias.map(subcategoria => (
                <option key={subcategoria.id} value={subcategoria.id}>
                  {subcategoria.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
