import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.header__container}>
          <NavLink className={getClassName} to="/">
            Dashboard
          </NavLink>
          <NavLink className={getClassName} to="/tweets">
            Tweets
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
