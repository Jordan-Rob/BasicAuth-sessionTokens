const joi = require('@hapi/joi')

const signupChecks = (data) => {
    const validationChecks = joi.object({
        username: joi.string().min(4).required(),
        email: joi.string().min(6).email(),
        password: joi.string().min(6).required(),
        gender: joi.string().required(),
        country: joi.string().required(),
        profession: joi.string().required()
    })
    return validationChecks.validate(data)
}

const loginChecks = (data) => {
    const validationChecks = joi.object({
        email: joi.string().min(6).email(),
        password: joi.string().min(6).required(),
    })
    return validationChecks.validate(data)
}

module.exports.signupChecks = signupChecks
module.exports.loginChecks = loginChecks