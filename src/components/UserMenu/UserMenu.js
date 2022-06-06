import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import avatar from 'images/avatar.png';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
/* import { Button } from '@material-ui/core'; */

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import s from './UserMenu.module.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00d4ff',
    },
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <Avatar alt="user avatar" src={avatar} sx={{ width: 40, height: 40 }} />
      <p className={s.email}>Welcome, {name}</p>
      <ThemeProvider theme={theme}>
        <Button
          type="medium"
          variant="contained"
          size="small"
          color="primary"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
          <BsArrowUpRightSquareFill className={s.iconButton} />
        </Button>
      </ThemeProvider>
      {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
        
      </Button> */}
    </div>
  );
};

/* const UserMenu = ({ email, name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.email}>Welcome, {name ? name : email}</span>

    <Button
      type="submit"
      variant="contained"
      color="primary"
      size="medium"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
); */
