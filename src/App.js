import React, { lazy, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/container';
import { useDispatch, useSelector } from 'react-redux';

import { /* toast, */ ToastContainer } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import HomeView from 'views/HomeView/HomeView';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import ContactsView from 'views/ContactsView/ContactsView';
/* const HomeView = lazy(() =>
  import('./views/HomeView' ),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' ),
);
const LoginView = lazy(() =>
  import('./views/LoginView' ),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' ),
); */

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      {!isFetchingCurrentUser && (
        <Suspense
          fallback={
            <TailSpin
              heigth="120"
              width="120"
              color="#006280"
              ariaLabel="loading"
            />
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute restricted>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/">
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      )}
      <ToastContainer autoClose={1500} />
    </Container>
  );
};

export default App;
