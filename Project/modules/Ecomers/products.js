import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    decription:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    catagres:{
        type:mongoose.module.Types.ObjectId,
        ref:"Catagres"
    },
    owner:{
        type:mongoose.module.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Products = mongoose.model("products",ProductsSchema);
