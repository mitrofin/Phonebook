import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
/* import { Container } from '@material-ui/core'; */
import { authSelectors } from 'redux/auth';
import Modal from 'components/Modal/Modal';
import Preloader from 'components/Preloader/Preloader';
import phonebook from '../../images/phonebook.png';
import styles from './HomeView.module.scss';
import loginAndRegisterViewTransitionStyles from '../../components/transitionStyles/loginAndRegisterViewTransitionStyles.module.scss';

const HomeView = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  return (
    <>
      {isFetchingCurrentUser && (
        <Modal>
          <Preloader />
        </Modal>
      )}

      <CSSTransition
        in={true}
        appear
        classNames={loginAndRegisterViewTransitionStyles}
        timeout={500}
        unmountOnExit
      >
        <div className={styles.Container}>
          <img src={phonebook} alt="phonebook" height="600" width="310" />

          <div className={styles.Wraper}>
            <h1 className={styles.Title}>Phonebook</h1>

            <p className={styles.HomeText}>To start using our app, please</p>
            <Link to="/login" className={styles.HomeLink}>
              Log in
            </Link>
            <span className={styles.HomeSpan}>or</span>
            <Link to="/register" className={styles.HomeLink}>
              Register
            </Link>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default HomeView;
