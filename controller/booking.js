const Booking = require('../Model/Booking')
const Destination = require('../Model/Destination')

exports.postBooking = async (req, res) => {
    try {
         const { 
             name, 
             email, 
             phone, 
             message, 
             nights, 
             b_hotel_people, 
             b_hotel_name, 
             b_hotel_price, 
             total_price, 
             d_id,
            country } = req.body
        if(
            !name || 
            !email || 
            !phone || 
            !message || 
            !nights || 
            !b_hotel_people || 
            !b_hotel_name || 
            !b_hotel_price || 
            !total_price || 
            !d_id ||
            !country) {
            return res.status(400).json({msg: 'Please fill all fields'})
        }

        const booking = new Booking({
            name,
            email,
            phone,
            message,
            nights,
            b_hotel_people,
            b_hotel_name,
            b_hotel_price,
            total_price,
            d_id,
            country
        })

        const success = await booking.save()
        if(success){
            // return res.status(200).json({msg: 'Booking successful!'})
            return res.status(200).json(success)
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
