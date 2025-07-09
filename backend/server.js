const express = require('express');
const cors = require('cors')
// require('dotenv').config();
const connectDB = require('./config/db.js')
const userRoute = require('./routes/userRoute.js')
const PORT = 3000

const app = express()
connectDB()

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => { 
  res.send('server started')
})

app.use('/api/user', userRoute)

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`))