import mongoose from "mongoose";

const OderSchema = new mongoose.Schema({
    OrderPrice:{
        type:Number,
        require:true
    },
    oderitems:{
        type:{
            productid:{
                type:mongoose.module.Types.ObjectId,
                ref:"products"
            },
            quantity:{
                type:Number,
                require:true
            }
        }
    },
    coustumer:{
        type:mongoose.module.Types.ObjectId,
        ref:"User"
    },
    products:{
        type:mongoose.module.Types.ObjectId,
        ref:"products"
    },
    address:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","completed","cancelled"],
        default:"pending"  
    }

},{timestamps:true})

export const orders = mongoose.module("orders", OderSchema);
