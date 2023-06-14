const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
  const filterUser = req.query.user_email || null;
  controller.getUsers(filterUser).then((gottenUsers) => {
    response.success(req,res,gottenUsers,200);
  }).catch(findedError => {
    response.error(req,res,'Unexpected Error',500,findedError);
  });
});

router.post('/',(req,res) => {
  const user_name = req.body.user_name;
  const user_email = req.body.user_email;
  const user_password = req.body.user_password;

  controller.addUser({user_name,user_email,user_password})
    .then((fullMessage) => {
      response.success(req,res,fullMessage,201);
    }).catch(findedError => {
      response.error(req,res,'Invalid Information',400,findedError);
    });
});

module.exports = router;
