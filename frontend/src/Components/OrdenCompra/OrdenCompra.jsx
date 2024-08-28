import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function OrdenCompra({ onAddOrden }) {
  const [formData, setFormData] = useState({
    numeroOrden: '',
    proveedor: '',
    fecha: '',
    items: [{ nombre: '', cantidad: '', precio: '' }]
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [name]: value };
    setFormData({
      ...formData,
      items: newItems
    });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { nombre: '', cantidad: '', precio: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.numeroOrden && formData.proveedor && formData.fecha && formData.items.every(item => item.nombre && item.cantidad && item.precio)) {
      const newOrden = {
        ...formData,
        items: formData.items.map(item => ({
          ...item,
          cantidad: parseInt(item.cantidad, 10),
          precio: parseFloat(item.precio)
        }))
      };
      onAddOrden(newOrden); // Registrar la nueva orden
      navigate('/listaordenes'); // Redirigir a la lista de órdenes
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Crear Orden de Compra</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formNumeroOrden">
              <Form.Label>Número de Orden (Mesa de entrada)</Form.Label>
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
            <Form.Group controlId="formProveedor">
              <Form.Label>Proveedor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Proveedor"
                name="proveedor"
                value={formData.proveedor}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                placeholder="Fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <h4>Items</h4>
        {formData.items.map((item, index) => (
          <Row key={index}>
            <Col md={4}>
              <Form.Group controlId={`formNombreItem-${index}`}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del ítem"
                  name="nombre"
                  value={item.nombre}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId={`formCantidadItem-${index}`}>
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cantidad"
                  name="cantidad"
                  value={item.cantidad}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId={`formPrecioItem-${index}`}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Precio"
                  name="precio"
                  value={item.precio}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        ))}
        <Button variant="secondary" className="mt-3" onClick={addItem}>
          Agregar Ítem
        </Button>
        <Button variant="primary" type="submit" className="mt-3 ms-2">
          Crear Orden de Compra
        </Button>
      </Form>
    </div>
  );
}
