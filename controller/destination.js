const Destination = require('../Model/Destination')

exports.postDestination = async (req, res) => {
    try {

        const { name, location, duration, price, description, information, rating, gallery, plan, facility } = req.body

        //Checks for empty required fields
        if(!name || !location || !duration || !price || !description || !information || !rating || !gallery){
            res.status(400).json('Please fill the required fields')
        }

        const newDestination = new Destination({
            name,
            location,
            duration,
            price,
            description,
            information,
            rating,
            gallery,
            plan,
            facility
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
            return res.status(200).json({count: destinations.length, destinations})
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
        const { gallery } = req.body
         //Check for empty field
         if(!gallery){
            return res.status(400).json({msg: 'Please fill gallery field'})
        }
        const destinationDetail = await Destination.findById(id)
        if(!destinationDetail) {
            return res.status(404).json({msg: 'Destination cannot be found'})
        } else {
            destinationDetail.gallery = gallery

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