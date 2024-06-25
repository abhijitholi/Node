const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2")
const videoSchema = new mongoose.Schema(
 {
videoFile:{
    type:String,
    require:true
},
thumnal:{
    type:String,
    require:true
},
title:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
duration:{
    type:String,
    require:true
},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    require:true
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
 },
 {
    timeseries:true
 }  
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema);