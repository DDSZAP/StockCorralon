// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    navigate('/login'); // Redirige al usuario a la página de login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
