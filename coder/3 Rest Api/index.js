const express = require('express')
const app = express();
const port = 3005;

const products = require('./data.json');

// body Parser
app.use(express.json());

// Endpoins

// Create API Post
app.post('/products', (req, res) => {
    products.push(req.body);
    res.json({type:'POST'});
  });
// Read GET /products
app.get('/products',(req,res)=>{
    //res.send('Hii')
   //console.log(products,"this is data")                                            
    res.json(products)
})

// Read GET /products/id
app.get('/products/:id', (req, res) => {
    const id =+req.params.id; // Assuming id is a number
    const product = products.find(p => p.id === id);
    if (product) { 
        res.json(product); 
     } else {
       res.send({ message: "Product not found" });
     }
});

  
// Update PUT /products/id
app.put('/products/:id', (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products[productIndex] = { ...req.body, id: id };
        res.status(200).json({ message: "Product updated successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Update Patch /products/id
app.patch('/products/:id', (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        // Merge existing product data with new data from req.body
        products[productIndex] = { ...products[productIndex], ...req.body };
        res.status(200).json({ message: "Product updated successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Delete  /products/id
app.delete('/products/:id', (req, res) => {
    const id = +req.params.id; // Assuming id is a number
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        // Remove the product from the array
        products.splice(productIndex, 1);
        res.status(200).json({ message: "Product deleted successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});


app.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`)
})