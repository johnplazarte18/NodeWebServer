//conexion a posgresql
const {Pool}=require('pg');
const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'123456',
    database:'juegos_olimpicos',
    port:'5432'
})

const getUsers= async (req,res)=>{
    //Tiene su tiempo-await y async asincrono
    const respuesta= await pool.query('SELECT * FROM deportes');
    res.status(200).json(respuesta.rows);
}

const getUsersId = async (req,res)=>{
    const respuesta= await pool.query('SELECT * FROM deportes WHERE id=$1',[req.params.id]);
    res.status(200).json(respuesta.rows);
}

module.exports={
    getUsersId,
    getUsers
}