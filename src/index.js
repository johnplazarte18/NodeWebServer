//arrancar servidor
const express=require('express');
const app=express();

//middlewares
app.use(express.json());//trabaja con formato json y lo entienda el jvscript
app.use(express.urlencoded({extended:false}));//datos simples de un formulario

//routes
app.use(require('../routes/index'));

app.listen(4000);
console.log('servidor en puerto 4000');