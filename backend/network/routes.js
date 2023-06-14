const express = require('express');

const userRouter = require('../components/users/network');

const routes = (server) => {
  server.use('/users',userRouter);
};

module.exports = routes;
