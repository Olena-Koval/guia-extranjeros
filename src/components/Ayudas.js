// src/components/Ayudas.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';  // Importamos nuestra instancia de axios

const Ayudas = () => {
  // Estado para almacenar los datos de las ayudas
  const [ayudas, setAyudas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  // Hacer la solicitud HTTP para obtener las ayudas cuando el componente se monta
  useEffect(() => {
    // Realizamos la solicitud a la API
    axios.get('/ayudas')  // La URL debe ser relativa a la baseURL configurada en axios.js
      .then(response => {
        setAyudas(response.data); // Guardamos los datos de la respuesta en el estado
        setLoading(false); // Indicamos que la carga ha terminado
      })
      .catch(error => {
        console.error('Error al obtener las ayudas', error); // Mostramos el error en la consola
        setError('Hubo un problema al obtener los datos de las ayudas.'); // Guardamos el mensaje de error
        setLoading(false); // Indicamos que la carga ha terminado
      });
  }, []);  // El arreglo vacío asegura que solo se ejecuta una vez al montar el componente

  if (loading) {
    return <p>Cargando ayudas sociales...</p>; // Mensaje mientras estamos cargando los datos
  }

  if (error) {
    return <p>{error}</p>; // Mensaje de error si ocurre un problema
  }

  return (
    <section>
      <h2>Ayudas Sociales</h2>
      <ul>
        {/* Renderizamos la lista de ayudas recibida de la API */}
        {ayudas.length > 0 ? (
          ayudas.map((ayuda, index) => (
            <li key={index}>
              <strong>{ayuda.nombre}</strong>: {ayuda.descripcion}
            </li>
          ))
        ) : (
          <p>No se encontraron ayudas disponibles.</p>
        )}
      </ul>
    </section>
  );
}

export default Ayudas;
