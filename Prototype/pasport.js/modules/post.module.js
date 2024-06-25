const mongoouse = require('mongoose');

const postSchema = new mongoouse.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    categories:{
        type:String,
        require:true
    }
 })

 module.exports = mongoouse.model('Post',postSchema)

