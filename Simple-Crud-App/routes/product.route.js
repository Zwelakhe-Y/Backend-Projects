const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
//ADD EVERY FORMULA(E.G 'postProduct' to the curly brackets to define their location)
const {postProduct, getProducts, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

//ADD PRODUCT (CREATE)(POST)
router.post('/', postProduct)

//GET ALL PRODUCT (READ)(GET)
router.get('/', getProducts);

//GET ONE PRODUCTS (READ)(GET)
router.get('/:id', getSingleProduct);

//UPDATE A PRODUCT (UPDATE)(PUT)
router.put('/:id', updateProduct);

//DELETE A PRODUCT(DELETE)
router.delete('/:id', deleteProduct)


module.exports = router;