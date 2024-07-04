import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    cratedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },   
},{timestamps:true})
export const Todo = mongoose.module("Todo",todoSchema);


