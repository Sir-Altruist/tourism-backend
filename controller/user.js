const User = require('../Model/User')
const bcrypt = require('bcryptjs')

exports.postUser = async (req, res) => {
    try {

        const { username, email, phone, country, password, confirm } = req.body

    //Check for empty field
    if(!username || !email || !phone || !country || !password || !confirm){
        return res.status(400).json({msg: 'Please fill all fields'})
    }
    //Check if passwords match 
    if(password !== confirm){
        return res.status(400).json({msg: 'Passwords do not match'})
    }
    
    //process user form
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({msg: 'User with the provided email already exists'})
    } else {
        const newUser = new User({
            username,
            email,
            phone,
            country,
            password
        })

        //Hash password
         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                newUser.password = hash
                newUser.save().then(result => {
                    res.status(200).json({msg: 'User created successfully!'})
                })
                .catch(err => res.json(err))
            })
        })
        
    }

    } catch (error) {
        console.log(error)
    }
    
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({createdAt: -1}).select('-password -phone')
        if(users){
            return res.status(200).json(users)
        }
    }
    catch (error) {
        console.log(error)
    }
}

exports.getSingleUser = async (req, res) => {
    try {

        const id = req.params.userId

        const singleUser = await User.findById(id)
        if(singleUser){
            return res.status(200).json(singleUser)
        } else {
            return res.status(404).json({msg: 'No valid data for the Id above'})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.editUser =  async (req, res) => {
    try {

        const id = req.params.userId

        const { username, email, phone, country } = req.body
        //Check for empty field
        if(!username || !email || !phone || !country){
            return res.status(400).json({msg: 'Please fill all fields'})
        }
        const userDetails = await User.findById(id)
        if(!userDetails) {
            return res.status(404).json({msg: 'User cannot be found'})
        } else {
            userDetails.username = username
            userDetails.email = email
            userDetails.phone = phone
            userDetails.country = country

            //save updated user's information
            const user = await userDetails.save()
            if(user){
                return res.status(200).json({msg: 'User information updated successfully!'})
            }
        }

    } catch(error) {
        console.log(error)
    }
}

exports.removeUser = async (req, res) => {
    try {
         
        const id = req.params.userId
        const deleteSuccess = await User.deleteOne({_id: id})
        if(deleteSuccess) {
            return res.status(200).json({msg: 'User successfully deleted'})
        }
    } catch (error) {
        console.log(error)
    }
}