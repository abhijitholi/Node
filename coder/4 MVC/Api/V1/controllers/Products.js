const fs = require('fs');

const products = require('../../../data.json');



// Create API Post
exports.CreateProducts= (req, res) => {
    products.push(req.body);
    res.json({type:'POST'});
  }; 
// Get Products
exports.Allproducts = (req,res)=>{
    res.json(products) 
}
// Get One Product
exports.Oneproducts = (req, res) => {
    const id =+req.params.id; // Assuming id is a number
    const Product = products.find(p => p.id === id);
    res.json(Product);
  }

  exports.PutProduct = (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products[productIndex] = { ...req.body, id: id };
        res.status(200).json({ message: "Product updated successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}

exports.UpdateProduct = (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        // Merge existing product data with new data from req.body
        products[productIndex] = { ...products[productIndex], ...req.body };
        res.status(200).json({ message: "Product updated successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}

exports.DeleteProduct = (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        // Remove the product from the array
        products.splice(productIndex, 1);
        res.status(200).json({ message: "Product deleted successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}