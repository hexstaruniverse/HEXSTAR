require('dotenv').config
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')



const createToken = function (_id) {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '10m'})
}

const Schema =  mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
    },
    passwordResetToken: {
        type: String
    },
    passwordResetTokenExpire: {
        type: Date
    },
    passwordUpdateDate: {
        type: Date
    }
}, {timestamps: true})


// static signup method
userSchema.statics.signup = async function(email, name, password) {

    //validation
    if(!email || !name || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not Strong')
    }

    const email_exits = await this.findOne({ email })

    if(email_exits) {
        throw Error('Email already exits')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, name, password: hash})

    const ws = name.indexOf(' ')
    const firstname = name.substring(0, ws)

    var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
    });

    var mailOptions = {
    from: process.env.USER,
    to: email,
    subject: process.env.VERIFY_SUBJECT,
    text: `Hi ${firstname},\n\nthank you for Signing up with Hex-Star Universe.\nClick on the link to successfully login - ${'http://localhost:8888/api/user/login'}`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    return user

}

//static login method
userSchema.statics.login = async function(email, password) {

    //validation
    if(!email || !password) {
        throw Error('All fields must be filled')
    }  

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user

}

userSchema.statics.finduser = async function(email) {

    const usr = await this.findOne({ email })

    if(!usr) {
        throw Error('Email not found')
    }
    else {
        console.log(usr.email, usr._id)
        const token  = createToken(usr._id)
        const hash_token = crypto.createHash('sha256').update(token).digest('hex')
        await this.findByIdAndUpdate(usr._id, {passwordResetToken: hash_token, passwordResetTokenExpire: Date.now() + 10 * 60 * 1000})

        //mail send 
        const link = `http://localhost:8888/api/user/reset-password/${usr._id}/${token}`

        const ws = usr.name.indexOf(' ')
        const firstname = usr.name.substring(0, ws)

        var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
        });
    
        var mailOptions = {
        from: process.env.USER,
        to: email,
        subject: process.env.RESET_PASSWORD,
        text: `Hello ${firstname},\n\na request has been received to change your Hex-Star Universe password.\nClick on the link to reset your password - ${link}.\nThe link is only valid for 10 minutes.`
        };
    
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email to reset password has been sent: ' + info.response);
        }
        });

        return token
    }

}

userSchema.statics.findbytoken = async function(token, password) {

    const hash_token = crypto.createHash('sha256').update(token).digest('hex')
    const user = await this.findOne({passwordResetToken: hash_token, passwordResetTokenExpire: {$gt: Date.now()}})

    if(!user) {
        throw Error('Token has either expired or is invalid')
    }

    else {

        user.passwordResetToken = undefined
        user.passwordResetTokenExpire = undefined
        user.passwordUpdateDate = Date.now()
        if(!validator.isStrongPassword(password)) {
            throw Error('Password not Strong')
        } 
    
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)
        user.password = hash
        await user.save()
        
    

    }
    return user

}


module.exports = mongoose.model('User', userSchema)