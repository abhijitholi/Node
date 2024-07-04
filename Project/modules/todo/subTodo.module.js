import mongoose from "mongoose";    

const subTodoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})  

export const SubTodo = mongoose.model("SubTodo",subTodoSchema);


