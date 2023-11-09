require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')

//express app
const app = express()

//cors 
app.use(cors({}))

//middleware to access request body
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/user', userRoutes)

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listening to port
    app.listen(process.env.PORT, () => {
        console.log('listening for requests on PORT', process.env.PORT)
    })
})
.catch((err) => {
    console.log('Server encountered an err', err)
})