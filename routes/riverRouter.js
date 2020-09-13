const express = require('express');
const bodyParser = require('body-parser');

const riverRouter = express.Router();

riverRouter.use(bodyParser.json());

riverRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the river details to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the river details: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end('Can not use PUT method in the river details');
  })
  .delete((req, res, next) => {
    res.end('Will delete the river details!');
  });

module.exports = riverRouter;
