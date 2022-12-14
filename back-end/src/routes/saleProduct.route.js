const express = require('express');
const saleProductController = require('../controller/saleProductController');
const validateAuth = require('../middlewares/validateAuth');

const saleProducts = express.Router();

saleProducts.get('/:id/search', validateAuth, saleProductController.getSaleProducts);

module.exports = saleProducts;