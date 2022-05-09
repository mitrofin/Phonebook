import PropTypes from 'prop-types';
import s from './section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h1 className={s.title}>{title}</h1>}

      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
