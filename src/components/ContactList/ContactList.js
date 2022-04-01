import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactList({ contacts, onDeleteButtonClick }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact, idx) => (
        <li key={contact.id} className={idx % 2 === 0 ? s.even : s.odd}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            id={contact.id}
            className={s.deleteButton}
            onClick={e => onDeleteButtonClick(e.target.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = PropTypes.shape({
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* onDeleteButtonClick: PropTypes.func.isRequired, */
}).isRequired;
