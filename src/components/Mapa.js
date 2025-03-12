// src/components/Mapa.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  // Necesario para los estilos de Leaflet

const Mapa = () => {
  const mapContainer = useRef(null);

  // Datos de las ubicaciones (nombre, latitud, longitud, información)
  const locations = [
    { name: 'Oficina Municipal de Empadronamiento', lat: 41.6488, lng: -0.8891, info: 'Ayuntamiento de Zaragoza' },
    { name: 'Comisaría Provincial de Zaragoza', lat: 41.6484, lng: -0.8932, info: 'Policía Nacional' },
    { name: 'Instituto Aragonés de Servicios Sociales', lat: 41.6463, lng: -0.8797, info: 'IASS Zaragoza' },
    { name: 'Oficina de Extranjería Zaragoza', lat: 41.6490, lng: -0.8885, info: 'Extranjería Zaragoza' },
    { name: 'Oficina INAEM Zaragoza', lat: 41.6481, lng: -0.8854, info: 'INAEM Zaragoza' },
    { name: 'INSS Zaragoza', lat: 41.6520, lng: -0.8895, info: 'INSS Zaragoza' },
    { name: 'Vivienda Joven Zaragoza', lat: 41.6502, lng: -0.8879, info: 'Vivienda Joven Zaragoza' },
  ];

  useEffect(() => {
    // Inicializa el mapa con Leaflet
    const map = L.map(mapContainer.current).setView([41.6480, -0.8893], 13);  // Coordenadas de Zaragoza

    // Añadir el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Añadir marcadores para cada ubicación
    locations.forEach(location => {
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.info}`); // Ventana emergente con la información
    });

    // Limpiar el mapa al desmontar el componente
    return () => {
      map.remove();
    };
  }, [locations]);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '500px' }}></div>  // Estilo del mapa
  );
}

export default Mapa;
