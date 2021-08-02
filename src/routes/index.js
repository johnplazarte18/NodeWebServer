//definir rutas que va a tener el sevidor
const {Router}=require('express');//obtener funcion
const router=Router();//obtener objeto

const {getUsers}=require('../controllers/index.controllers')

router.get('/users',getUsers)

module.exports=router;
