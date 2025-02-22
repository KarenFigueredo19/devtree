//const express = require("express"); //CJS - Common JS -> No lo soporta TS
import express from 'express' // ESM EcmaScript modules

const app = express();

//Routing
app.get("/", (req, res) => {
  res.send("Hola mundo desde Express");
});

const port = 4000

app.listen(port, () => {
  console.log("Servidor funcionando en el puerto:" , port);
});
