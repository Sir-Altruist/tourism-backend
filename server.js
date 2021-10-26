const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoute = require('./routes/contact')
const aboutRoute = require('./routes/about')
const userRoute = require('./routes/user')
const destinationRoute = require('./routes/destination')
const uploadRoute = require('./controller/imageUpload')
const bookingRoute = require('./routes/booking')
// const cors = require('cors')
const dotenv = require('dotenv').config()
// const path = require('path')

// const PORT = process.env.PORT || 5000


mongoose.Promise = global.Promise

//db connection
mongoose.connect(
    process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV,
    {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('database connected succesfully'))
.catch(err => console.log(err))


const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
    res.header('Access-Control-Max-Age', '3600')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Range')
    res.header('Access-Control-Expose-Headers', 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  }

//allow cross origin resource sharing
app.use(cors)


//form processing
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/contact', contactRoute)
app.use('/about', aboutRoute)
app.use('/users', userRoute)
app.use('/destinations', destinationRoute)
app.use('/booking', bookingRoute)
app.use('/upload', uploadRoute)

app.get('/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
app.listen()
