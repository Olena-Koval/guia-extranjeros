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
      <h2>Ayudas Sociales en Zaragoza</h2>
      <ul>
        {/* Renderizamos la lista de ayudas recibida de la API */}
        {ayudas.length > 0 ? (
          ayudas.map((ayuda, index) => (
            <li key={index}>
              <strong>{ayuda.nombre}</strong>: {ayuda.descripcion}
            </li>
          ))
        ) : (
          <p>No se encontraron ayudas disponibles en Zaragoza.</p>
        )}
      </ul>

      {/* Bloques de Ayudas Sociales */}
      <section>
        <h3>1. Ayuda Financiera para Familias con Hijos Menores de 18 Años</h3>
        <p>
          Si tienes hijos menores de 18 años, puedes acceder a ayudas económicas familiares a través de los servicios sociales de tu localidad.
        </p>
        <a href="https://www.aragon.es/web/dpto-servicios-sociales" target="_blank" rel="noopener noreferrer">
          Consulta las ayudas familiares en el sitio oficial de Servicios Sociales de Aragón.
        </a>
      </section>

      <section>
        <h3>2. Ayuda Financiera para la Compra de Alimentación</h3>
        <p>
          Existen programas para ayudar a las personas en situación económica vulnerable a obtener tarjetas de alimentación. Estos programas suelen gestionarse a través de organizaciones sociales.
        </p>
        <a href="https://www.cruzroja.es/web/zonas/zonas-de-intervencion/atencion-alimentaria" target="_blank" rel="noopener noreferrer">
          Más información sobre ayudas alimentarias de Cruz Roja.
        </a>
      </section>

      <section>
        <h3>3. Ayuda Financiera para el Pago de Alquiler o Hipotecas</h3>
        <p>
          Si te encuentras en una situación vulnerable y no puedes afrontar el pago de tu alquiler o hipoteca, puedes solicitar ayudas económicas para evitar la pérdida de vivienda.
        </p>
        <a href="https://www.murciadiario.com/articulo/municipios/ayudas-alquiler/20230509093552059647.html" target="_blank" rel="noopener noreferrer">
          Consulta la ayuda para el alquiler en el sitio oficial.
        </a>
      </section>

      <section>
        <h3>4. Ayudas Financieras Urgentes de Cruz Roja, Cáritas y Fundación San Ezquel Moreno</h3>
        <p>
          Estas organizaciones ofrecen ayudas económicas urgentes para personas en situación de emergencia social.
        </p>
        <ul>
          <li>
            <a href="https://www.cruzroja.es/web/zonas/zonas-de-intervencion" target="_blank" rel="noopener noreferrer">
              Cruz Roja - Ayudas urgentes
            </a>
          </li>
          <li>
            <a href="https://www.caritas.es/" target="_blank" rel="noopener noreferrer">
              Cáritas - Ayudas sociales
            </a>
          </li>
          <li>
            <a href="https://www.fundacionsanezquelmoreno.org/" target="_blank" rel="noopener noreferrer">
              Fundación San Ezquel Moreno - Ayudas económicas
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>5. Solicitud de Tarjeta de Transporte</h3>
        <p>
          Si eres residente en Zaragoza, puedes solicitar una tarjeta de transporte para acceder a los servicios de transporte público. Las condiciones y precios pueden variar dependiendo de tu situación.
        </p>
        <a href="https://www.avanzagrupo.com/" target="_blank" rel="noopener noreferrer">
          Más información sobre la solicitud de tarjeta de transporte en Avanza.
        </a>
      </section>

      <section>
        <h3>6. Solicitud de Ingreso Mínimo Vital</h3>
        <p>
          El Ingreso Mínimo Vital es una ayuda económica destinada a garantizar un nivel mínimo de ingresos a las personas y familias en situación de vulnerabilidad. Los requisitos varían según tu situación.
        </p>
        <a href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacion/03071" target="_blank" rel="noopener noreferrer">
          Solicita el Ingreso Mínimo Vital en la Seguridad Social.
        </a>
      </section>

      <section>
        <h3>7. Listado de Órganos para Solicitar Citas Previas</h3>
        <p>
          Para diversos trámites administrativos, necesitarás solicitar una cita previa. Aquí te dejamos una lista con enlaces a los sitios oficiales para realizar dicha solicitud.
        </p>
        <ul>
          <li>
            <a href="https://www.citapreviadnie.es/" target="_blank" rel="noopener noreferrer">
              Solicitar cita para el DNI
            </a>
          </li>
          <li>
            <a href="https://www.citapreviaseg-social.es/" target="_blank" rel="noopener noreferrer">
              Solicitar cita para la Seguridad Social
            </a>
          </li>
          <li>
            <a href="https://www.sede.administracionespublicas.gob.es/citaprevia/" target="_blank" rel="noopener noreferrer">
              Solicitar cita para la Administración Pública
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Ayudas;
