const express = require('express')
const router = express.Router()

router.post('/', (request, response) => {
    response.send('test')
})

module.exports = router