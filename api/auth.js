const express = require('express')
const router = express.Router()
const user = require('../models/user')
const { signupChecks, loginChecks } = require('../authValidation')

router.post('/signup', async (request, response) => {
    const { error } = signupChecks(request.body)
    if (error) {
        response.status(400).send(error.details[0].message)
    }

    const existingEmail = await user.findOne({ email: request.body.email })
    if (existingEmail) {
        return response.status(400).send('Email already in use ')
    }


    const newUser = new user({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        gender: request.body.gender,
        country: request.body.country,
        profession: request.body.profession
    })
    newUser.save()
        .then((data) => {
            response.json(data)
        })
        .catch((error) => {
            response.json(error)
        })
})

router.post

module.exports = router