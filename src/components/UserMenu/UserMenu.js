import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import styles from './UserMenu.module.css';

const UserMenu = ({ post, onLogout }) => (
    <div className={styles.container}>
        <span className={styles.post}>Welcome, {post}</span>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>
);
const mapStateToProps = state => ({
    post: authSelectors.getUserPost(state),
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);