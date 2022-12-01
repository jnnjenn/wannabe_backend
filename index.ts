console.log("TEST");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req:any, res:any)=>{
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req:any, res:any)=>{
  res.json({
    name : "Hola soy una nueva ruta",
    price : 1000
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});

