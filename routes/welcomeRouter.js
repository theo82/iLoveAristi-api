const express = require('express');
const bodyParser = require('body-parser');

const welcomeRouter = express.Router();

welcomeRouter.use(bodyParser.json());

welcomeRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the welcoming message to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the welcoming message: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end('Can not use PUT method in the welcoming message');
  })
  .delete((req, res, next) => {
    res.end('Will delete the welcoming message!');
  });

module.exports = welcomeRouter;
