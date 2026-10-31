import Contact from '../models/Contact.js'

export async function test(req,res){
    const response = {
        message: "Endpoint Reached"
    }
    res.status(200).json(response)
}

export async function getContacts(req,res){
    try{
        let contact = await Contact.find();
        res.status(200).json(contact);
    }catch (error) {
        res.status(500).json(error)
    }
}

export async function addContacts(req,res){
    try{
        const contact = await new Contact(req.body).save();
        res.status(200).json(contact)
    }catch (error){
        res.status(500).json(error)
    }
}