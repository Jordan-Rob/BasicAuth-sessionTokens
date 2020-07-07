const express = require('express')
const app = express()
const authUrls = require('./api/auth')

app.use('/api/auth', authUrls)

app.listen(3000, () => {
    console.log('server is up and running');
})