import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL || 'http:localhost:4000'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar la solicitud GET a la API de videos
    axios.get(`${URL}apiUser/users`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []); // El segundo parámetro [] significa que este efecto se ejecutará solo una vez al montar el componente


  return (
    <>
      <h1>DEPLOY</h1>
      
      
    </>
  );
}

export default App;
