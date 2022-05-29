import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { authSelectors } from 'redux/auth';
import styles from './AppBar.module.scss';
import { Container } from '@mui/system';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container maxWidth="xl">
      <nav className={styles.authNav}>
        <header className={styles.siteHeader}>
          <NavLink
            to="/"
            className={styles.navLink}
            /* activeClassName={styles.activeNavLink} */
          >
            {!isLoggedIn ? 'Home' : 'Contacts'}
          </NavLink>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      </nav>
    </Container>
  );
};
