const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
  const filterUser = req.query.userEmail || null;
  controller.getUsers(filterUser).then((gottenUsers) => {
    response.success(req,res,gottenUsers,200);
  }).catch(findedError => {
    response.error(req,res,'Unexpected Error',500,findedError);
  });
});

router.post('/',(req,res) => {
  const {userName,userEmail,userPassword} = req.body;

  controller.addUser({userName,userEmail,userPassword})
    .then((fullMessage) => {
      response.success(req,res,fullMessage,200);
    }).catch(findedError => {
      response.error(req,res,'Invalid Information',400,findedError);
    });
});

module.exports = router;
