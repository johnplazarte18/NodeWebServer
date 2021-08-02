//conexion a posgresql
const {Pool}=require('pg');
new Pool({
    host:'localhost',
    user:'postgres',
    password:'123456',
    database:'juegos_olimpicos',
    port:'5432'
})

const getUsers= (req,res)=>{
    res.send('usuario');}

module.exports={
    getUsers
}