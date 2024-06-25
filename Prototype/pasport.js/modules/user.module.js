const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      index: true,
    },
    Email: {
      type: String,
      require: true,
      index: true,
    },
    fullname: {
      type: String,
      require: true,
      index: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: normal_User,
    },
    avatar: {
      type: String,
      require: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      require: [true, "password is reqired"],
    },
    refreshToken: {
      require: true,
      type: string,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save",async function (next){
    if(!this.isModifide("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    await bcrypt.compare(password. this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign()
}
userSchema.methods.generateRefreshToken = function(){
    
}
module.exports = mongoose.model("User", userSchema);
