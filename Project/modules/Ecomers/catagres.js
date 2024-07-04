import mongoose from "mongoose";

const catagresSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    
},{timestamps:true})

export const Catagres = mongoose.model("Catagres",catagresSchema);