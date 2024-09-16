import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Crea el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Verifica el estado de autenticación al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Podrías obtener más datos del usuario aquí si es necesario
    }
  }, []);

  // Función de inicio de sesión
  const login = async (email, password) => {  // Cambiado a 'email' en lugar de 'username'
    try {
      // Realiza la solicitud de inicio de sesión (sin token CSRF)
      const response = await fetch('http://10.0.0.17/stock-api/public/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Asegúrate de aceptar JSON
        },
        body: JSON.stringify({ email, password }),  // Cambiado a 'email'
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);  // Guarda el token si es necesario
        setIsAuthenticated(true);
        setUser(data.user); // Si el backend envía detalles del usuario
        navigate('/'); // Redirige a la página protegida
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Función de cierre de sesión
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
