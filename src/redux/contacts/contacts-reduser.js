import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-action';
/* import contactsList from '../../contacts.json'; */

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.some(({ name }) => name === payload.name)
      ? alert(`${payload.name} already exists in your phonebook`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
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
