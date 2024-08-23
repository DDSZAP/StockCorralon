import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import './ListadoDisponibilidad.css';

export default function ListadoDisponibilidad({ ItemsDisponibles, onModify, onDelete }) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const sortedItems = [...ItemsDisponibles].sort((a, b) => {
        if (sortConfig.key) {
            let aKey = a[sortConfig.key];
            let bKey = b[sortConfig.key];

            if (typeof aKey === 'number' && typeof bKey === 'number') {
                if (aKey < bKey) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aKey > bKey) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
            } else {
                aKey = aKey.toString().toLowerCase();
                bKey = bKey.toString().toLowerCase();
                
                if (aKey < bKey) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aKey > bKey) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
            }
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
        } else {
            return <FaSort />;
        }
    };

    return (
        <div className="table-responsive mt-2">
            <h3>Listado Disponibilidad</h3>
            <Table striped bordered hover className="table-adaptable">
                <thead>
                    <tr>
                        <th onClick={() => requestSort('id')}>
                            ID {getSortIcon('id')}
                        </th>
                        <th onClick={() => requestSort('nombre')}>
                            Nombre Item {getSortIcon('nombre')}
                        </th>
                        <th onClick={() => requestSort('descripcion')}>
                            Descripción {getSortIcon('descripcion')}
                        </th>
                        <th onClick={() => requestSort('stock')}>
                            Stock {getSortIcon('stock')}
                        </th>
                        <th onClick={() => requestSort('categoria')}>
                            Categoría {getSortIcon('categoria')}
                        </th>
                        <th onClick={() => requestSort('subcategoria')}>
                            Sub Categoría {getSortIcon('subcategoria')}
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
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
                                    <FaEdit />            
                                </Button>
                                <Button
                                    variant="danger" 
                                    size="sm" 
                                    onClick={() => onDelete(item.id)}
                                >
                                    <FaTrash />                                    
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
