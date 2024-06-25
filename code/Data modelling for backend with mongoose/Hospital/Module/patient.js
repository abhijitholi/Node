const mongoose = require('mongoose');

const patientRecordSchema = new mongoose.Schema({
 name:{
    type:String,
    require:true
 },
 diagonsedWith:{
    type:String,
    require:true
 },
 Addres:{
    type:String,
    require:true
 },
 Age:{
    type:String,
    require:true
 },
 BlodGroup:{
    type:String,
    require:true
 },
 Gender:{
    type:String,
    enam:["M","F","O"],
    require:true
 },
 AdmitedIn:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"Hospital",
    require:true
 }

},{timestamps: true})

export const PatientlRecord = mongoose.model("PatientlRecord",patientRecordSchema);

