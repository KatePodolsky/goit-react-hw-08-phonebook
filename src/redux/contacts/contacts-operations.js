import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    saveContactRequest,
    saveContactSuccess,
    saveContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './contacts-actions';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error.message)))
}

const saveContact = ({ name, number }) => dispatch => {
    const contact = { name, number };

    dispatch(saveContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(saveContactSuccess(data)))
        .catch(error =>
            dispatch(saveContactError(error.message)))

}

const deleteContact = id => dispatch => {

    dispatch(deleteContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error =>
            dispatch(deleteContactError(error.message)))

}
// eslint-disable-next-line
export default { fetchContacts, saveContact, deleteContact }