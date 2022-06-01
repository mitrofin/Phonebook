import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
/* import actions from '../../redux/contacts/contacts-action'; */
import s from './ContactList.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
/* import { getFilteredContacts } from '../../redux/contacts/contacts-selectors'; */
import { contactsSelectors, contactsOperation } from '../../redux/contacts';
const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  /*   const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter); */
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperation.deleteContact(id));

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
            onClick={() => onDeleteContact(id)}
          >
            Delete
            <DeleteIcon sx={{ fontSize: 20 }} />
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
