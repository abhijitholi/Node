const mongoouse = require('mongoose');

const categoriesSchema = new mongoouse.Schema({
    name:{
        type:String,
        require:true
    }
 })

 module.exports = mongoouse.model('categorie',categoriesSchema)

