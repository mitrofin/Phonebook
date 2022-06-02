import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-action';
import { contactsSelectors } from '../../redux/contacts';
import s from './Filter.module.scss';

export default function Filter() {
  const initialValue = useSelector(contactsSelectors.getFilter);
  console.log(initialValue);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(filterContact(e.target.value));

  return (
    <div className={s.inputWrapper}>
      <label className={s.filterLabel}>
        <h5 className={s.filterInput}>Find contacts by name:</h5>
        <input
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
