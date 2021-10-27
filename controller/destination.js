const Destination = require('../Model/Destination')

exports.postDestination = async (req, res) => {
    try {

        const { 
            name, 
            location, 
            duration, 
            price, 
            flight, 
            description, 
            information, 
            rating, 
            gallery, 
            plan, 
            facility,
            cities,
            p_hotel_name,
            p_hotel_rating,
            p_hotel_price,
            p_hotel_gallery,
            p_from,
            p_to,
            excludes
            } = req.body

        const newDestination = new Destination({
            name,
            location,
            duration,
            price,
            flight,
            description,
            information,
            rating,
            gallery,
            plan,
            facility,
            cities,
            p_hotel_name,
            p_hotel_rating,
            p_hotel_price,
            p_hotel_gallery,
            p_from,
            p_to,
            excludes
        })

        const destination = await newDestination.save()
        if(destination){
            return res.status(200).json({msg: 'Destination added successfully!'})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find().sort({createdAt: -1})
        if(destinations){
            return res.status(200).json(destinations)
        }
    }
    catch (error) {
        console.log(error)
    }
}

exports.getSingleDestination = async (req, res) => {
    try {

        const id = req.params.destinationId

        const singleDestination = await Destination.findById(id)
        if(singleDestination){
            return res.status(200).json(singleDestination)
        } else {
            return res.status(404).json({msg: 'No valid data for the Id above'})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.editDestination = async (req, res) => {
    try {

        const id = req.params.destinationId
        const { 
            name, 
            location, 
            duration, 
            price, 
            flight, 
            description, 
            information, 
            rating, 
            gallery, 
            plan, 
            facility,
            cities,
            p_hotel_name,
            p_hotel_rating,
            p_hotel_price,
            p_hotel_gallery,
            p_from,
            p_to,
            excludes
            } = req.body
        
        const destinationDetail = await Destination.findById(id)
        if(!destinationDetail) {
            return res.status(404).json({msg: 'Destination cannot be found'})
        } else {
            destinationDetail.name = name 
            destinationDetail.location = location 
            destinationDetail.duration = duration 
            destinationDetail.price = price 
            destinationDetail.flight = flight 
            destinationDetail.description = description 
            destinationDetail.information = information 
            destinationDetail.rating = rating 
            destinationDetail.gallery = gallery 
            destinationDetail.plan = plan 
            destinationDetail.facility = facility
            destinationDetail.cities = cities 
            destinationDetail.p_hotel_name = p_hotel_name 
            destinationDetail.p_hotel_rating = p_hotel_rating 
            destinationDetail.p_hotel_price = p_hotel_price 
            destinationDetail.p_hotel_gallery = p_hotel_gallery 
            destinationDetail.p_from = p_from 
            destinationDetail.p_to = p_to 
            destinationDetail.excludes = excludes 

            //save updated destination information
            const destination = await destinationDetail.save()
            if(destination){
                return res.status(200).json({msg: 'Destination updated successfully!'})
            }
        }
    } catch (error) {
        console.log(error)
    }
}

exports.removeDestination = async (req, res) => {
    try {
         
        const id = req.params.destinationId
        const deleteSuccess = await Destination.deleteOne({_id: id})
        if(deleteSuccess) {
            return res.status(200).json({msg: 'Destination successfully deleted'})
        }
    } catch (error) {
        console.log(error)
    }
}