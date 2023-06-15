const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
  const localFilter = req.query._id || null;
  controller.getUsers(localFilter).then((gottenLocals) => {
    response.success(req,res,gottenLocals,200);
  }).catch(findedError => {
    response.error(req,res,'Unexpected Error',500,findedError);
  });
});

router.post('/',(req,res) => {
  const {_id,products_list,local_name,local_status} = req.body;

  controller.addUser({_id,products_list,local_name,local_status,local_logo})
    .then((fullMessage) => {
      response.success(req,res,fullMessage,201);
    }).catch(findedError => {
      response.error(req,res,'Invalid Information',400,findedError);
    });
});

module.exports = router;
