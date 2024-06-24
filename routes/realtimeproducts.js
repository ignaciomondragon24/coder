
const express = require('express');
const router = express.Router();
const ProductManager = require('../dao/mongoDb/productManager');

const productManager = new ProductManager();

router.get('/', async (req, res) => {
    const products = await productManager.getAllProducts();
    res.render('realTimeProducts', { products });
});

module.exports = router;