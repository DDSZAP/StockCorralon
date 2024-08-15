import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-black mt-5">
      <Container fluid className="py-3">
        <Row className='pt-3 border-top border-light'>
          <Col md="4">
            <h5>Sobre Nosotros</h5>
            <p>
              Gestión y administración de stocks para municipalidades.
            </p>
          </Col>
          <Col md="4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-black">Home</a></li>
              <li><a href="/about" className="text-black">About</a></li>
              <li><a href="/contact" className="text-black">Contact</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contacto</h5>
            <p>
              Email: contacto@corralonmunicipal.com<br />
              Teléfono: +54 123 456 789 <br />
              Dirección: calle nombre N°1234
            </p>
          </Col>
        </Row>
        <Row className="pt-3 border-top border-light">
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Municipalidad de Zapala. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
