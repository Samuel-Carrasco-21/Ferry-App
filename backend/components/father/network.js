const express = require('express');

const router = express.Router();

const routerUsers = require('../users/network');

const lowering = (value) => {
  return toString(value).toLocaleLowerCase();
}

router.get('/',(req,res) => {
  const directionDB = req.body.directionDB;
  if(directionDB){
    if(lowering(directionDB) === 'users'){
      router.use(`/${directionDB}`,routerUsers);
    }else if(lowering(directionDB) === 'locals'){

    }else{
      console.error("NO EXISTE LA DIRECCION!");
    }
  }else{
    console.error("AGREGUE LA DIRECCION!");
  }
});

router.post('/',(req,res) => {
  if(!req.body.directionDB){
    if(lowering(req.body.directionDB) === 'users'){

    }else if(lowering(req.body.directionDB) === 'locals'){

    }else{
      console.error("NO EXISTE LA DIRECCION!");
    }
  }else{
    console.error("AGREGUE LA DIRECCION!");
  }
});

module.exports = router;
