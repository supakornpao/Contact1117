import {test, getContacts, addContacts} from "../controllers/contactController.js"

export default function ContactRoutes(app){
    app.route('/').get(test)

    app.route('/contacts/getcontacts').get(getContacts)

    app.route('/contacts/add').post(addContacts)
}