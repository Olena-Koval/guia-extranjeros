// src/axios.js
import axios from 'axios';

// Configuramos Axios con una base URL para las solicitudes
const instance = axios.create({
  baseURL: 'https://api.example.com',  // Sustituye esta URL por la URL de tu API real
});

export default instance;
