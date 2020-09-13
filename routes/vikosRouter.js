const express = require('express');
const bodyParser = require('body-parser');

const vikosRouter = express.Router();

vikosRouter.use(bodyParser.json());

vikosRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the vikos details to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the vikos details: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end('Can not use PUT method in the vikos details');
  })
  .delete((req, res, next) => {
    res.end('Will delete the vikos details!');
  });

module.exports = vikosRouter;
