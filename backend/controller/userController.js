require("dotenv").config();
const User = require('../models/usermodels')
const newsletteruser = require('../models/newsLetterModel')
const jwt = require('jsonwebtoken')

const createToken = function (_id) {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '10m'})
}

const forgot_password = async (req, res) => {

    const { email } = req.body
    
    //check user exits in database
    try {

        const token = await User.finduser(email)

        res.status(200).json({token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }
    

}

//reset password
const resetPassword = async (req, res) => {

    const { token } = req.params
    const { password, confirmpassword } = req.body

    try {
        if(password === confirmpassword) {
            const user = await User.findbytoken(token, password)
            res.status(200).json({user})
        }
        else {

            res.send('Password Mismatch')
        }
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

//login user
const loginUser = async (req, res) => {

    const {email, password} = req.body
    
    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req, res) => {
    const {email, name, password} = req.body

    try {
        const user = await User.signup(email, name, password)

        //create token
        // const token = createToken(user._id)

        res.status(200).json({user})
    }catch(error) {
        res.status(400).json({error: error.message})
    }
    
}

const newsletter = async (req, res) => {
    const { email } = req.body

    try {

        const user = await newsletteruser.newsletteremail(email)
        res.status(200).json({user})

    }catch(error) {
        res.status(400).json({error: error.message})
    }
    
}



module.exports = {signupUser, loginUser, forgot_password, resetPassword, newsletter}