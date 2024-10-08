import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Item from './Components/Item/Item.jsx';
import Entrada from './Components/Entrada/Entrada.jsx';
import ListaEntradas from './Components/Entrada/ListaEntradas.jsx';
import ListaOrdenes from './Components/OrdenCompra/ListaOrdenes.jsx';
import OrdenCompra from './Components/OrdenCompra/OrdenCompra.jsx';
import { handleAddItem, handleDelete, handleModifyItem, filterItems } from '../src/Utils/Utils.js';
import axios from 'axios';
import { AuthProvider, AuthContext } from './Context/AuthContext.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.js';

function AppContent() {
  const [items, setItems] = useState([]); // Estado inicial vacío para items
  const [searchTerm, setSearchTerm] = useState('');
  const [entradas, setEntradas] = useState(() => {
    const savedEntradas = localStorage.getItem('entradas');
    return savedEntradas ? JSON.parse(savedEntradas) : [];
  });

  // Obtén el contexto de autenticación
  const { isAuthenticated } = useContext(AuthContext);

  // Cargar items desde la base de datos solo si el usuario está autenticado
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = localStorage.getItem('token');  // Asegúrate de usar el token si es necesario        
        const response = await axios.get('http://10.0.0.17/stock-api/public/api/items', {
          headers: {
            Authorization: `Bearer ${token}` // Si tu API requiere autenticación, añade el token aquí
          }
        });
        setItems(response.data);
      } catch (error) {
        console.error('Error al cargar los items:', error);
      }
    };

    if (isAuthenticated) {  // Verifica si el usuario está autenticado
      fetchItems();  // Solo llama a fetchItems si el usuario está autenticado
    }
  }, [isAuthenticated]);  // Añade isAuthenticated como dependencia

  // Guardar entradas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('entradas', JSON.stringify(entradas));
  }, [entradas]);

  const onAddItem = async (newItem) => {
    await handleAddItem(items, setItems, newItem);
    setEntradas((prevEntradas) => [...prevEntradas, newItem]);
  };

  const onDelete = async (id) => {
    await handleDelete(items, setItems, id);
  };

  const onModifyItem = async (updatedItem) => {
    await handleModifyItem(items, setItems, updatedItem);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredItems = filterItems(items, searchTerm); // Aplicar filtro basado en el searchTerm

  return (
    <div className="App">
      {/* Muestra el NavBar solo si el usuario está autenticado */}
      {isAuthenticated && <NavBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />}
      <Routes>
        {/* Ruta pública para el login */}
        <Route exact path='/login' element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <Home
                items={filteredItems}
                setItems={setItems}
                onModify={onModifyItem}
                onDelete={onDelete}
                searchTerm={searchTerm}
              />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/items'
          element={
            <PrivateRoute>
              <Item />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/entrada'
          element={
            <PrivateRoute>
              <Entrada onAddItem={onAddItem} />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/listaentradas'
          element={
            <PrivateRoute>
              <ListaEntradas items={entradas} />
            </PrivateRoute>
          }
        />
        <Route
          path='/ordencompra'
          element={
            <PrivateRoute>
              <OrdenCompra />
            </PrivateRoute>
          }
        />
        <Route
          path='/listaordenes'
          element={
            <PrivateRoute>
              <ListaOrdenes />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
