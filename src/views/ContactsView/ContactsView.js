import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperation } from 'redux/contacts';
import { Grid } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from '../../components/Section/section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { CSSTransition } from 'react-transition-group';
import loginAndRegisterViewTransitionStyles from '../../components/transitionStyles/loginAndRegisterViewTransitionStyles.module.scss';
import contactViewTransitionStyles from '../../components/transitionStyles/contactViewTransitionStyles.module.scss';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const isError = useSelector(contactsSelectors.getError);
  const isContacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperation.getContacts());
  }, [dispatch]);

  return (
    <>
      <CSSTransition
        in={true}
        appear
        classNames={loginAndRegisterViewTransitionStyles}
        timeout={500}
        unmountOnExit
      >
        <Section title="Phonebook">
          <ContactForm />
          <Filter />
        </Section>
      </CSSTransition>

      <CSSTransition
        in={true}
        appear
        classNames={contactViewTransitionStyles}
        timeout={500}
        unmountOnExit
      >
        <Section title="Saved contacts">
          {isLoading && (
            <Grid
              heigth="120"
              width="120"
              color="#5773f6"
              ariaLabel="loading"
            />
          )}
          {isContacts.length === 0 ? (
            <h3>You don't have contacts yet</h3>
          ) : (
            <ContactList />
          )}
          {isError && toast.error('We were unable to load contacts!')}
        </Section>
      </CSSTransition>
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default ContactsView;
