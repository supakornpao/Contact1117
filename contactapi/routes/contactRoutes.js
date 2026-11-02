import {test, getContacts, addContacts, getContactById, updateContact, deleteContact, searchContact} from "../controllers/contactController.js"
import { loginUser } from "../controllers/userController.js"

export default function ContactRoutes(app){
    app.route('/').get(test)

    app.route('/contacts/getcontacts').get(getContacts)

    app.route('/contacts/getcontacts/:id').get(getContactById)

    app.route('/contacts/update/:id').put(updateContact)

    app.route('/contacts/delete/:id').delete(deleteContact)

    app.route('/contacts/add').post(addContacts)

    app.route('/search').get(searchContact)

    app.route('/users/login').post(loginUser)
}