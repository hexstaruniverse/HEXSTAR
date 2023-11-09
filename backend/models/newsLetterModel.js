const mongoose = require('mongoose')
require('dotenv').config
const validator = require('validator')

const newsletterSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    }
}, {timestamps: true})

newsletterSchema.statics.newsletteremail = async function(email) {

    if(!email) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    const newsletteruser = await this.create({email})

    return newsletteruser
}

module.exports = mongoose.model('Newsletter_User', newsletterSchema)