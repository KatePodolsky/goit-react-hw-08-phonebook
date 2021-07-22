import axios from "axios";
import authActions from './auth-actions';

axios.defaults.baseUrl = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Autorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Autorization = '';
    },
}

const register = credentials => dispatch => { };

const logIn = credentials => dispatch => { };

const logOut = () => dispatch => { };

const getCurrentUser = () => (dispatch, getState) => { };

export default {
    register,
    logIn,
    logOut,
    getCurrentUser
};