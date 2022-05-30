import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <nav className={styles.authNav}>
      <NavLink
        to="/register"
        className={styles.navLink}
        /* activeClassName={styles.activeNavLink} */
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        className={styles.navLink}
        /* activeClassName={styles.activeNavLink} */
      >
        Log In
      </NavLink>
    </nav>
  );
};
