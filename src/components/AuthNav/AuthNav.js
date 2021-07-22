import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './AuthNav.module.css'

const AuthNav = () => (
    <div>
        <NavLink
            to={routes.register}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Register now
        </NavLink>
        <NavLink
            to={routes.login}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Log In
        </NavLink>
    </div>
);

export default AuthNav;