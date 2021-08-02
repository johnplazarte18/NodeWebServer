// Lectura de variable de entorno (.env)
require("dotenv").config();
//conexion a posgresql
const { Pool } = require("pg");
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const getUsers = async (req, res) => {
    //Tiene su tiempo-await y async asincrono
    const respuesta = await pool.query("SELECT * FROM deportes");
    res.status(200).json(respuesta.rows);
};

const getUsersId = async (req, res) => {
    const respuesta = await pool.query("SELECT * FROM deportes WHERE id=$1", [
        req.params.id,
    ]);
    res.status(200).json(respuesta.rows);
};

module.exports = {
    getUsersId,
    getUsers,
};
