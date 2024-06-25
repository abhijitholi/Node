const mongoouse = require('mongoose');

const comentSchema = new mongoouse.Schema({
    user_id:{
        type:mongoouse.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },
    post_id:{
        type:mongoouse.Schema.Types.ObjectId,
        ref: 'Post',
        require:true
    },
    comment:{
        type:String,
    require:true
    },

 })

 module.exports = mongoouse.model('coment',comentSchema)

