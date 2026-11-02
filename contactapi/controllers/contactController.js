import Contact from '../models/Contact.js'


export async function getContacts(req,res){
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch (error) {
        res.status(500).json(error)
    }
}

export async function getContactById(req,res){
    const contact = await Contact.findOne({contactId: req.params.id});
    if(!contact){
        return res.status(404).json({error:"contact not found"})
    }
    else res.status(200).json(contact);
}

export async function searchContact(req,res){
    try{
        const {firstName, lastName} = req.query;
        const filter = {}
        if(firstName){
            filter.firstName = firstName;
        }
        if(lastName){
            filter.lastName = lastName;
        }
        const contacts = await Contact.find(filter);
        res.json(contacts);
    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message});
    }
}

export async function updateContact(req,res){
    const {contactId,firstName,lastName,mobile} = req.body
    if(contactId)
        return res.status(400).json({error: "cannot change contactId"})
    if(!firstName || !lastName || !mobile)
        return res.status(400).json({error: "not enough information"});
    if(mobile.length<9 || mobile.length>10)
        return res.status(400).json({error: "invalid mobile number"});
    const contact = await Contact.findOneAndUpdate({contactId: req.params.id},req.body, {new: true});
    if(!contact){
        return res.status(404).json({error:"contact not found"})
    }
    else res.status(200).json(contact)
}

export async function deleteContact(req,res){
    const contact = await Contact.findOneAndDelete({contactId: req.params.id});
    if(!contact){
        return res.status(404).json({error:"contact not found"})
    }
    else res.status(200).json({message: req.params.id+" deleted successfully"})
}

export async function addContacts(req,res){
    const exist = await Contact.findOne({contactId: req.body.contactId})
    if(exist) return res.status(409).json({error: "duplicate contact"});
    const {contactId,firstName,lastName,mobile} = req.body;
    if(!contactId || !firstName || !lastName || !mobile)
        return res.status(400).json({error: "not enough information"})
    if(mobile.length<9 || mobile.length>10)
        return res.status(400).json({error: "invalid mobile number"})
    const contact = await new Contact(req.body).save();
    res.status(201).json(contact)
}

