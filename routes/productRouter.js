const express = require('express');
const cors = require('./cors');

const productRouter = express.Router();

productRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get(cors.cors, (req, res) => {
    res.end('Will send all the products to you');
  })
  .post(cors.corsWithOptions, (req, res) => {
    res.end(
      `Will add the product: ${req.body.name} with description: ${req.body.description} and price: ${req.body.price}`
    );
  })
  .put(cors.corsWithOptions, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /products');
  })
  .delete(cors.corsWithOptions, (req, res) => {
    res.end('Deleting all products');
  });
module.exports = productRouter;
