// El archivo de ejecucion de nuestra aplicacion
// Configurar nuestro servidor y gestionar la logica de negocio de toda la aplicacion.

console.log ('voy a ser un servidor')

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)