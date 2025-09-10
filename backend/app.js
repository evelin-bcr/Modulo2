// El archivo de ejecución de nuestra applicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias y modulos necesarios 
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routers.js";
import { userRouter } from "./src/routes/users.routers.js";
import cors from "cors";
// 2. configurar las dependencias que necesitemos
const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo(); //esto es lo que hace la conexión con db

// 3. funcionalidades que necesite agregar
app.get("/",(request,response)=>{
 response.send("Server works!")
});

app.use(cors()); // Habilita cors
app.use(express.json()); //es para usar formato json
app.use("/products", productRouter);
app.use("/users", userRouter)


// 4. levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});