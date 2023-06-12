const express = require('express');

const fatherRouter = require('../components/father/network');

const routes = (server) => {
  server.use('/',fatherRouter);
};

module.exports = routes;
