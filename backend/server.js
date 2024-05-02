require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const userModel = require('./model/userModel')
const router = require('./router/webRouter')

// instance
const app = express()

// middleware
app.use(express.json())

// endpoint
app.use('/user/data', router)




// connect
mongoose.connect(process.env.MONGODBLINK)
        .then(()=>{
            app.listen(process.env.PORT, ()=> {
                console.log('connected')
            })
        })
        .catch((error)=> {
            console.log(error)
        })










