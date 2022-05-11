import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');

const contactsAction = { addContact, deleteContact, filterContact };
export default contactsAction;
