const express = require('express')
const server = express();
const ProductRouter = express.Router();
const Product = require('../controllers/Products');
ProductRouter
.post('/', Product.CreateProducts )
.get('/',Product.Allproducts)
.get('/:id', Product.Oneproducts)
.put('/:id', Product.PutProduct )
.patch('/:id', Product.UpdateProduct )
.delete('/:id',Product.DeleteProduct);

//module.exports = { ProductRouter };
exports.ProductRouter = ProductRouter;