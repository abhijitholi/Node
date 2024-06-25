const mongoouse = require('mongoose');

const permissionSchema = new mongoouse.Schema({
    user_id:{
        type:mongoouse.Schema.Types.ObjectId, // 0-Create, 1-read, 2-update, 3-delete
        ref: 'User',
        require:true
    },
   permission:[{
    permission_name: String,
    permission_value: Number,
   }]

 })

 module.exports = mongoouse.model('permission',permissionSchema)

