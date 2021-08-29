const Booking = require('../Model/Booking')

exports.postBooking = async (req, res) => {
    try {
        const { name, email, phone, people, message } = req.body

    if(!name || !email || !phone || !people || !message) {
        return res.status(400).json({msg: 'Please fill all fields'})
    }

    const booking = new Booking({
        name,
        email,
        phone,
        people,
        message
    })

    const success = await booking.save()
    if(success){
        return res.status(200).json({msg: 'Booking successful!'})
    }
    } catch (error) {
        console.log(error)
    }  
}

exports.getBookings = async (req, res) => {
    try {
        
        const bookings = await Booking.find().sort({createdAt: -1})
        if(bookings){
            return res.status(200).json(bookings)
        }
    } catch (error) {

        console.log(error)
    }
}
