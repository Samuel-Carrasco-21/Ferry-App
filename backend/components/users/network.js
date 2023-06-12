const express = require('express');

const router = express.Router();

router.get('/users', (req,res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  if(!userName || !password){
    console.error("DATOS INSUFICIENTES  ");
  }else{
    res.send('Hola mundo, el backend funciona correctamente');
  }
});

module.exports = router;