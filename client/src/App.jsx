import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    UserName: '',
    Email: '',
    Password: ''
  });

  useEffect(() => {
    // Realizar la solicitud GET a la API de usuarios
    axios.get(`${URL}/apiUser/users`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo parámetro [] significa que este efecto se ejecutará solo una vez al montar el componente

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Esta es la ruta register: " + URL + '/apiUser/register')
    axios.post(`${URL}/apiUser/register`, newUser)
      .then(response => {
        // Actualizar la lista de usuarios con el nuevo usuario registrado
        setUsers(prevUsers => [...prevUsers, response.data]);
        // Limpiar el formulario después de enviar
        setNewUser({
          UserName: '',
          Email: '',
          Password: ''
        });
      })
      .catch(error => {
        console.error('Error al registrar nuevo usuario:', error);
      });
  };

  return (
    <>
      <h1>DEPLOY</h1>
      
      <h2>Usuarios:</h2>
      <ul>
        {users.map(user => (
          <li key={user.idUser}>{user.UserName} - {user.Email}</li>
        ))}
      </ul>
      <h2>Registrar Nuevo Usuario:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            name="UserName"
            value={newUser.UserName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="Email"
            value={newUser.Email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="Password"
            value={newUser.Password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default App;
