const mongoose = require('mongoose');

// Step 1: Define a schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
});

// Step 2: Create a model
const User = mongoose.model('Pasport_User', userSchema);


// Export the model
module.exports = User;
