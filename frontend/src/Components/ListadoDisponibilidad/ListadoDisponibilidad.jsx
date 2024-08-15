import React from "react";
import { Table, Button } from "react-bootstrap";
import {FaEdit,FaTrash} from 'react-icons/fa'

export default function ListadoDisponibilidad({ ItemsDisponibles, onModify, onDelete}) {
    return (
        <>
            <h3>Listado Disponibilidad</h3>
                <Table striped bordered hover>
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
                {ItemsDisponibles.map((ItemsDisponibles, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ItemsDisponibles.nombre}</td>
                        <td>{ItemsDisponibles.descripcion}</td>
                        <td>{ItemsDisponibles.stock}</td>
                        <td>{ItemsDisponibles.categoria}</td>
                        <td>{ItemsDisponibles.subcategoria}</td>
                        <td>
                                <Button 
                                    variant="warning" 
                                    size="sm" 
                                    onClick={() => onModify(ItemsDisponibles)}
                                    className="me-2"
                                >
                                    <FaEdit className="me-1" />
                                    Modificar
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm" 
                                    onClick={() => onDelete(ItemsDisponibles.id)}
                                >
                                    <FaTrash className="me-1" />
                                    Eliminar
                                </Button>
                            </td>
                    </tr>
                ))}
                </tbody>
                </Table>
        </>
    )
}