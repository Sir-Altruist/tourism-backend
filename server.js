const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoute = require('./routes/contact')
const userRoute = require('./routes/user')
const destinationRoute = require('./routes/destination')
const uploadRoute = require('./controller/imageUpload')
const bookingRoute = require('./routes/booking')
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')

const PORT = process.env.NODE_ENV || 5000


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

//allow cross origin resource sharing
app.use(cors())

//form processing
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/contact', contactRoute)
app.use('/users', userRoute)
app.use('/destinations', destinationRoute)
app.use('/booking', bookingRoute)
app.use('/upload', uploadRoute)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
