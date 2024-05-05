const Contact= require("../models/contactModel")

const addContact = async (req, res) => {
    const {name, phone, email} = req.body

    if(!name || !phone || !email){
        return res
            .status(400)
            .json({success: false,message : "Enter all the required fields!"})
    }
    try{
        const phoneExists = await Contact.findOne({phone})
        if (phoneExists){
            return res.status(400).json({
                success: false,message : "Phone number already exists!",})
        }

        const newContact = await Contact.create({name, phone, email})
        return res.status(200).json({
            success: true,
            message: "Contact created successfully",
            contact: newContact,

        })
    }catch(error){
        res.status(400).json({
            success: false,
            message: `Server problem ${error}`
        })
        console.log(error)
    }


}
module.exports = {addContact}