import {test, getContacts, addContacts, getContactById, updateContact, deleteContact} from "../controllers/contactController.js"

export default function ContactRoutes(app){
    app.route('/').get(test)

    app.route('/contacts/getcontacts').get(getContacts)

    app.route('/contacts/getcontacts/:id').get(getContactById)

    app.route('/contacts/update/:id').put(updateContact)

    app.route('/contacts/delete/:id').delete(deleteContact)

    app.route('/contacts/add').post(addContacts)
}