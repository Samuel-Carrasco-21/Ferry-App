const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
  const localFilter = req.query._id || null;
  controller.getLocals(localFilter).then((gottenLocals) => {
    response.success(req,res,gottenLocals,200);
  }).catch(findedError => {
    response.error(req,res,'Unexpected Error',500,findedError);
  });
});

router.post('/',(req,res) => {
  const {localName,localStatus,localLogo,localLocation} = req.body;
  let {productsList} = req.body;
  let listSchemas = [];
  const modelProduct = require('../products/model');

  productsList.map(product => listSchemas.push(new modelProduct(product)));
  productsList=[...listSchemas];

  controller.addLocal({productsList,localName,localStatus,localLogo,localLocation})
    .then((fullMessage) => {
      response.success(req,res,fullMessage,200);
    }).catch(findedError => {
      response.error(req,res,'Invalid Information',400,findedError);
    });
});

module.exports = router;
