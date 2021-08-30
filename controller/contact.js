const Contact = require('../Model/Contact')

exports.postContact = async (req, res) => {
    try {
        const { name, email, phone, country, message } = req.body

    if(!name || !email || !phone || !country || !message) {
        return res.status(400).json({msg: 'Please fill all fields'})
    }

    const contact = new Contact({
        name,
        email,
        phone,
        country,
        message
    })

    const success = await contact.save()
    if(success){
        return res.status(200).json({msg: success})
    }
    } catch (error) {
        console.log(error)
    }
}

exports.getContact = async (req, res) => {
    try {

        const allContacts = await Contact.find().sort({createdAt: -1})
        if(allContacts){
            return res.status(200).json(allContacts)
        }
    } catch (error) {
        console.log(error)
    }
}

exports.getSingleContact = async (req, res) => {
    try {
        const id = req.params.contactId
        const singleContact = await Contact.findById(id)
        if(singleContact){
            return res.status(200).json(singleContact)
        }
    } catch (error) {
        console.log(error)
    }
}

