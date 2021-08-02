//conexion a posgresql
const {Pool}=require('pg');
new Pool({
    
})

const getUsers= (req,res)=>{
    res.send('usuario');}

module.exports={
    getUsers
}