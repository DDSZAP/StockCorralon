import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [rememberUser, setRememberUser] = useState(false); // Estado para recordar usuario
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

  // Maneja el cambio de visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center mb-4 mt-4">Inicio de Sesión</h1>
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
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'} // Cambia el tipo de input según el estado
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibility}
                  style={{ borderLeft: 'none' }} // Remueve el borde izquierdo del botón
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icono según el estado */}
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRememberUser">
              <Form.Check
                type="checkbox"
                label="Recordame"
                checked={rememberUser}
                onChange={(e) => setRememberUser(e.target.checked)}
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Ingresar
            </Button>

            {/* Botones adicionales */}
            <Row className="mt-2">
              <Col>
                <Button variant="link" className="w-100" onClick={() => alert('Función de recuperación de contraseña')}>
                  Recuperar Contraseña
                </Button>
              </Col>
              <Col>
                <Button variant="link" className="w-100" onClick={() => alert('Función de obtener ayuda')}>
                  Obtener Ayuda
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}