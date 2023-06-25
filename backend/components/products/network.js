const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
  const productFilter = req.query._id || null;
  controller.getUsers(productFilter).then((gottenProducts) => {
    response.success(req,res,gottenProducts,200);
  }).catch(findedError => {
    response.error(req,res,'Unexpected Error',500,findedError);
  });
});

router.post('/',(req,res) => {
  const {productName,productStatus,quantityAvailable,productPrice}
  = req.body;
  controller.addUser({productName,productStatus,quantityAvailable,productPrice})
    .then((fullMessage) => {
      response.success(req,res,fullMessage,201);
    }).catch(findedError => {
      response.error(req,res,'Invalid Information',400,findedError);
    });
});