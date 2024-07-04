import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    Password:{
        type:String,
        require:true,
    }
},{timestamps:true}); 

export const User = mongoose.module("User", UserSchema);