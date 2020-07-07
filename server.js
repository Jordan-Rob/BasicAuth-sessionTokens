const express = require('express')
const app = express()
const authUrls = require('./api/auth')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
mongoose.connect(process.env.DB_ACCESS, () => {
    console.log('DB connected')
})

app.use(express.json())
app.use('/api/auth', authUrls)

app.listen(3000, () => {
    console.log('server is up and running');
})