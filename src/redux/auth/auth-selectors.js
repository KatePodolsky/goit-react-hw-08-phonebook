const getIsAuthenticated = state => state.auth.token;

const getUserPost = state => state.auth.user.email;

export default {
    getIsAuthenticated,
    getUserPost
}