// El archivo de ejecucion de nuestra aplicacion
// Configurar nuestro servidor y gestionar la logica de negocio de toda la aplicacion.

console.log ('voy a ser un servidor')

// 1. Importar las dependencias y modulos necesarios.
import express from 'express'
import dotenv from 'dotenv'
import { conexionMongo } from './src/config/db.js';

// 2. Configurar las dependencias que necesitamos
const app = express()
dotenv.config()

const port = process.env.PORT;
conexionMongo(); //esto es lo que hace la conexion db

// 3. funcionalidades que necesite agregar
app.get("/",(req,res)=>{
  res.send("Server works!")
 });
 
 
 // 4. levantar el servidor //3000, 9000
 app.listen(port, ()=>{
   console.log(`El servidor está ejecutándose en http://localhost:${port}`)
 });