import PropTypes from 'prop-types';
import s from './Filter.module.scss';

export default function Filter({ initialValue, onFilterChange }) {
  return (
    <div className={s.inputWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name:
        <input
          className={s.filterInput}
          type="text"
          name="name"
          value={initialValue}
          onChange={e => {
            onFilterChange(e.target.value);
          }}
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
