import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
import s from './ContactList.module.scss';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  /*   const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter); */
  const dispatch = useDispatch();

  /* const getFilteredContactsList = (allcontacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allcontacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }; */

  /* const normalizedFilter = (allcontacts, filter) => {
    return allcontacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  }; */

  /* const getFilteredContacts = getFilteredContactsList(contacts, filter); */

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }, idx) => (
        <li key={id} className={idx % 2 === 0 ? s.even : s.odd}>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            id={id}
            className={s.deleteButton}
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
}).isRequired;

export default ContactList;
