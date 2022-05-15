import s from './container.module.scss';

const Container = ({ children }) => (
  <div className={s.Container}>{children}</div>
);
export default Container;
