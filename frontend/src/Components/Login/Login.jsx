import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función de autenticación
    authenticateUser(username, password);
  };

  return (
    <div>
        <h1>Inicio de Sesion</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Ingresar</button>
        </form>
        <div>Recordarme</div>
        <div>¿Olvidaste Tus datos? Obtener ayuda</div>
        <div>¿No recordas tu contraseña? Recuperar</div>
    </div>
  );
}