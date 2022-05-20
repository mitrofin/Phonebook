import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-action';
import { contactsSelectors } from '../../redux/contacts';
import s from './Filter.module.scss';

export default function Filter(/* { initialValue, onFilterChange } */) {
  const initialValue = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(filterContact(e.target.value));

  return (
    <div className={s.inputWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name:
        <input
          className={s.filterInput}
          type="text"
          name="name"
          value={initialValue}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
}
Filter.defaultProps = {
  initialValue: '',
};
Filter.propTypes = PropTypes.shape({
  initialValue: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
}).isRequired;
