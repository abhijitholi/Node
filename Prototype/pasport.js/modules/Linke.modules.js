const mongoouse = require('mongoose');

const likeSchema = new mongoouse.Schema({
    user_id:{
        type:mongoouse.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    },
    post_id:{
        type:mongoouse.Schema.Types.ObjectId,
        ref: 'Post',
        require:true
    }

 })

 module.exports = mongoouse.model('like',likeSchema)

