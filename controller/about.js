const About = require('../Model/About')

exports.postAbout = async (req, res) => {

    try {

    const { image, description } = req.body
    if(!image || !description) {
        return res.status(400).json({msg: 'Please fill all fields'})
    }

    const about = new About({
        image,
        description
    })

    const success = await about.save()
    if(success){
        return res.status(200).json(success)
    }
    } catch (error) {
        return res.json(error)
    }

}

exports.getAbout = async (req, res) => {
    try {

        const about = await (await About.find().sort({createdAt: -1})).splice(0, 1)
        if(about) {
            return res.status(200).json(about)
        }

    } catch (error) {

        res.json(error)
    }
}