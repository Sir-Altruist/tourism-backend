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
