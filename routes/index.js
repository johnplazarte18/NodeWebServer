var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const {getPaises, getUsersId}=require('../controllers/index.controllers');

router.get('/paises',getPaises);
router.get('/users/:id',getUsersId);//id,pasar parametros

module.exports = router;
