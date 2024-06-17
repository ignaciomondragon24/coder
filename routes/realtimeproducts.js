
const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/productManager');

const productManager = new ProductManager();

router.get('/', async (req, res) => {
    const products = await productManager.getAllProducts();
    res.render('realTimeProducts', { products });
});

module.exports = router;