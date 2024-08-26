
// Función para agregar un nuevo item
export const handleAddItem = (items, setItems, newItem) => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    const itemWithId = { ...newItem, id: newId };
    setItems([...items, itemWithId]);
  };
 
  // Función para eliminar un item
export const handleDelete = (items, setItems, id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Función para filtrar items por término de búsqueda
export const filterItems = (items, searchTerm) => {
    return items.filter(item =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

// Función para modificar un item existente
export const handleModifyItem = (items, setItems, updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );
    setItems(updatedItems);
  };