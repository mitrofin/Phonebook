import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperation } from '../../redux/contacts';
import { BsFillFilePersonFill } from 'react-icons/bs';

import { toast } from 'react-toastify';
/* import * as yup from 'yup'; */
/* import { Formik, Form, Field, ErrorMessage } from 'formik'; */
import s from './ContactForm.module.scss';

uuidv4();

/* const validationSchema = yup.object({
  name: yup.string().required("Enter contact's name"),
  number: yup
    .string()
    .length(10, 'Example: 0930939393')
    .required("Enter contact's phone"),
}); */

/* [addContact.fulfilled]: (state, { payload }) =>
    state.some(({ name }) => name === payload.name)
      ? toast(`${payload.name} already exists in your phonebook`)
      : [...state, payload], */

export default function ContactForm(/* { onSubmit } */) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const addFilterContact = contact => {
    const contactFind = contacts.some(({ name }) => name === contact.name);

    contactFind
      ? toast(` ${name} already exists in your phonebook`)
      : dispatch(contactsOperation.addContact(contact));
  };

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addFilterContact({ name, number });
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={s.contactForm}
      onSubmit={handleSubmit}
      /* validationSchema={validationSchema} */
    >
      <label className={s.nameLabel}>
        Name:
        <input
          className={s.contactFormInput}
          id={uuidv4()}
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        {/* <Field type="text" name="name" className={s.contactFormInput} /> */}
        <span className={s.errorMessage}>
          {/* <ErrorMessage name="name" /> */}
        </span>
      </label>
      <label className={s.numberLabel}>
        Number:
        {/* <Field type="tel" name="number" className={s.contactFormInput} /> */}
        <input
          type="tel"
          name="number"
          className={s.contactFormInput}
          value={number}
          onChange={handleInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
        <span className={s.errorMessage}>
          {/* <ErrorMessage name="number" /> */}
        </span>
      </label>

      <button type="submit" className={s.submitButton}>
        Add contact
        <BsFillFilePersonFill className={s.iconButton} />
      </button>
    </form>
  );
}
