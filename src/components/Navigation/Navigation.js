import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink
            to='/'
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Home
        </NavLink>

        <NavLink
            to='/contacts'
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Сontacts
        </NavLink>
    </nav>
);

export default Navigation;