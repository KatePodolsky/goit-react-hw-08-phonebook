import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';

import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <NavLink
            to='/'
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Home
        </NavLink>
        {isAuthenticated && (
            <NavLink
            to='/contacts'
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Сontacts
        </NavLink> )}
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})

// eslint-disable-next-line
export default connect(mapStateToProps)(Navigation);