import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Item from './Components/Item/Item.jsx';
import Entrada from './Components/Entrada/Entrada.jsx';
import ListaEntradas from './Components/Entrada/ListaEntradas.jsx';
import itemsData from '../src/Utils/itemsData.js';
import { handleAddItem, handleDelete, handleModifyItem, filterItems } from '../src/Utils/Utils.js';

export default function App() {
  const [items, setItems] = useState(itemsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [entradas, setEntradas] = useState(() => {
    const savedEntradas = localStorage.getItem('entradas');
    return savedEntradas ? JSON.parse(savedEntradas) : [];
  });

  useEffect(() => {
    localStorage.setItem('entradas', JSON.stringify(entradas));
  }, [entradas]);

  const onAddItem = (newItem) => {
    handleAddItem(items, setItems, newItem);
    setEntradas(prevEntradas => [...prevEntradas, newItem]);
  };

  const onDelete = (id) => {
    handleDelete(items, setItems, id);
  };

  const onModifyItem = (updatedItem) => {
    handleModifyItem(items, setItems, updatedItem);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredItems = filterItems(items, searchTerm);

  return (
    <div className="App">
      <NavBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Routes>
        <Route exact path='/' element={<Home items={filteredItems} onModify={onModifyItem} onDelete={onDelete} searchTerm={searchTerm} />} />
        <Route exact path='/items' element={<Item />} />
        <Route exact path='/entrada' element={<Entrada onAddItem={onAddItem} />} />
        <Route exact path='/listaentradas' element={<ListaEntradas items={entradas} />} />
      </Routes>
      <Footer />
    </div>
  );
}
