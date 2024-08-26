import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

export default function ModalEditar({ show, handleClose, item, onSave }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    stock: '',
    categoria: '',
    subcategoria: '',
    numeroOrden: '' // Nuevo campo añadido
  });

  useEffect(() => {
    if (item) {
      setFormData({
        nombre: item.nombre || '',
        descripcion: item.descripcion || '',
        stock: item.stock || '',
        categoria: item.categoria || '',
        subcategoria: item.subcategoria || '',
        numeroOrden: item.numeroOrden || '' // Cargar el campo "N° Orden"
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.descripcion && formData.stock && formData.categoria && formData.subcategoria && formData.numeroOrden) {
      const updatedItem = {
        ...formData,
        stock: parseInt(formData.stock, 10)
      };
      onSave(updatedItem);
      handleClose();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Modificar Ítem: {formData.nombre ? formData.nombre : 'Ítem'} {/* Mostrar el nombre del ítem */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formNumeroOrden">
                <Form.Label className="font-weight-bold">N° Orden</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="text"
                  placeholder="Número de orden"
                  name="numeroOrden"
                  value={formData.numeroOrden}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formNombre">
                <Form.Label className="font-weight-bold">Nombre del Ítem</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="text"
                  placeholder="Nombre del ítem"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formDescripcion">
                <Form.Label className="font-weight-bold">Descripción</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="text"
                  placeholder="Descripción del ítem"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formStock">
                <Form.Label className="font-weight-bold">Stock</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="number"
                  placeholder="Cantidad en stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formCategoria">
                <Form.Label className="font-weight-bold">Categoría</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="text"
                  placeholder="Categoría"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formSubcategoria">
                <Form.Label className="font-weight-bold">Subcategoría</Form.Label> {/* Título en negrita */}
                <Form.Control
                  type="text"
                  placeholder="Subcategoría"
                  name="subcategoria"
                  value={formData.subcategoria}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-3">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
