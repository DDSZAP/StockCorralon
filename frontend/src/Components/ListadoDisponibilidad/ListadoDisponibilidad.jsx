import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from 'react-icons/fa';
import './ListadoDisponibilidad.css'; // Asegúrate de agregar los estilos CSS

export default function ListadoDisponibilidad({ ItemsDisponibles, onModify, onDelete }) {
    return (
        <div className="table-responsive"> {/* Contenedor para hacer la tabla responsive */}
            <h3>Listado Disponibilidad</h3>
            <Table striped bordered hover className="table-adaptable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Item</th>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Sub Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ItemsDisponibles.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.stock}</td>
                            <td>{item.categoria}</td>
                            <td>{item.subcategoria}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    size="sm" 
                                    onClick={() => onModify(item)}
                                    className="me-2"
                                >
                                    <FaEdit className="" />            
                                </Button>
                                <Button
                                    variant="danger" 
                                    size="sm" 
                                    onClick={() => onDelete(item.id)}
                                >
                                    <FaTrash className="" />                                    
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
