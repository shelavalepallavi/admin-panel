const express = require('express');
const cors = require('cors')
// require('dotenv').config();
const connectDB = require('./config/db.js')
const userRoute = require('./routes/userRoute.js')

const app = express()
connectDB()

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => { 
  res.send('server started')
})

app.use('/api/user', userRoute)

app.listen(3000, () => console.log('server started on 3000'))