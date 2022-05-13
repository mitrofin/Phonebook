import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-action';
import s from './Filter.module.scss';

export default function Filter(/* { initialValue, onFilterChange } */) {
  const initialValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onFilterChange = e => dispatch(actions.filterContact(e.target.value));

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
