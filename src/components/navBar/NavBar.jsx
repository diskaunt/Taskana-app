import React from 'react';
import style from './navBar.module.css';

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <nav className={style.navBar__menu}>
        <ul className={style.navBar__list}>
          <li className={style.navBar__item}>
            <a className={style.navBar__item_content} href=''>
              <img
                className={style.navBar__image}
                src='../../../public/navBar.svg'
                alt=''
              />
              <span>Входящие</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
