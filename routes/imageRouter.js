const express = require('express');
const bodyParser = require('body-parser');

const imageRouter = express.Router();

imageRouter.use(bodyParser.json());

imageRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the images to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the image: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.end('Can not use PUT method in the image');
  })
  .delete((req, res, next) => {
    res.end('Will delete all the images!');
  });

imageRouter
  .route('/:imageId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(
      'Will get the details of the image with id of: ' + req.params.imageId
    );
  })
  .post((req, res, next) => {
    res.end(res.end('Can not use POST method'));
  })
  .put((req, res, next) => {
    res.end(
      'Will add the image: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end('Will delete the image with the id of ' + req.params.imageId);
  });

module.exports = imageRouter;
