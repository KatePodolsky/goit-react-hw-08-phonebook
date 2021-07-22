import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, post, onLogout }) => (
    <div className={styles.container}>
        {/* <img src={avatar} alt={name} width="32" style={styles.avatar} /> */}
        <span className={styles.post}>Welcome, {post}</span>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>
);
// const mapStateToProps = state => ({
//     name: authSelectors.getUsername(state),
//     // avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//     onLogout: authOperations.logOut,
// };

export default UserMenu;