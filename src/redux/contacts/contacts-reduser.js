import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContact } from './contacts-action';
import { getContacts, deleteContact, addContact } from './contacts-operation';

const items = createReducer([], {
  /* [addContact.fulfilled]: (state, { payload }) =>
    state.some(({ name }) => name === payload.name)
      ? alert(`${payload.name} already exists in your phonebook`)
      : [...state, payload], */
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [getContacts.fulfilled]: (_, { payload }) => payload,

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

/* const handleSubmit = ({ name, number, id }) => {
    const contact = {
      id,
      name,
      number,
    };
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} already exists in your phonebook`);
    }
    setContacts(prevState => [...prevState, contact]); */
/* const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const getFilteredContactsList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }; */
