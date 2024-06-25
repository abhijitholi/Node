const mongoose = require('mongoose');
const uri = "mongodb+srv://jitholi83:oE1j2uKMLA1G6OjT@cluster0.2ctdevk.mongodb.net/newdata?retryWrites=true&w=majority&appName=Cluster0";



async function DataBase() {
 // Connect to MongoDB
mongoose.connect(uri, {
  //  use only Node.js Driver version 4.0.0
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
}
//DataBase().catch(console.dir);

module.exports = {DataBase} 