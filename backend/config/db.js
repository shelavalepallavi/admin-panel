const mongoose = require('mongoose');

const connectDB = async()=> {
try {
  await mongoose.connect('mongodb://localhost:27017/admin-panel')
  console.log('db connected')
} catch (error) {
  console.log('db connection failed', error)
}
}
module.exports = connectDB