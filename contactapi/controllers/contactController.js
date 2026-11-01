import Contact from '../models/Contact.js'

export async function test(req,res){
    const response = {
        message: "Endpoint Reached"
    }
    res.status(200).json(response)
}

export async function getContacts(req,res){
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch (error) {
        res.status(500).json(error)
    }
}

export async function getContactById(req,res){
    try{
        const contact = await Contact.findOne({contactId: req.params.id});
        if(!contact){
            return res.status(404).json({error:"contact not found"})
        }
        else res.status(200).json(contact);
        
    }catch(error){
        res.status(500).json(error);
    }
}

export async function updateContact(req,res){
    try{
        const contact = await Contact.findOneAndUpdate({contactId: req.params.id},req.body, {new: true});
        if(!contact){
            return res.status(404).json({error:"contact not found"})
        }
        else res.status(200).json(contact)
    }catch(error){
        res.status(500).json(error);
    }
}

export async function deleteContact(req,res){
    try{
        const contact = await Contact.findOneAndDelete({contactId: req.params.id});
        if(!contact){
            return res.status(404).json({error:"contact not found"})
        }
        else res.status(200).json({message: req.params.id+" deleted successfully"})
    }catch(error){
        res.status(500).json(error)
    }
}

export async function addContacts(req,res){
    try{
        const contact = await new Contact(req.body).save();
        res.status(201).json(contact)
    }catch (error){
        res.status(500).json(error)
    }
}

