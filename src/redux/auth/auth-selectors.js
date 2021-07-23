const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserPost = state => state.auth.user.email;

// eslint-disable-next-line
export default {
    getIsAuthenticated,
    getUserPost
}