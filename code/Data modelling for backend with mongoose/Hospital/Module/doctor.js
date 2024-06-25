const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
     },
     salarey:{
        type:Number,
        require:true,
     },
     qulafications:{
        type:String,
        require:true
     },
     experinceInYears:{
        type:String,
        require:true
     },
     worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
     ],
},{timestamps: true})

export const Doctor = mongoose.model("Doctors",medicalRecordoctorSchemadSchema);

