// src/components/Login/LoginForm.js
import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // Usa la función de login del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password); // Llama a la función de login
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Inicio de Sesión</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" type="submit" className="w-100">
              Ingresar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
