const express = require('express');

const userRouter = require('../components/users/network');
const localRouter = require('../components/locals/network');
// const productRouter = require('../components/products/network');

const routes = (server) => {
  server.use('/users',userRouter);
  server.use('/locals',localRouter);
  // server.use('/products',productRouter);
};

module.exports = routes;
