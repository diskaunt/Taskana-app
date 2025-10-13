
import style from './navBar.module.css';
import Icon from '../icon/Icon';

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <nav className={style.navBar__menu}>
        <ul className={style.navBar__list}>
          <li className={style.navBar__item}>
            <a className={`${style.navBar__content}`} href='/'>
              <div className={style.navBar__icon}>
                <Icon name={'Inbox'} />
              </div>
              <span>Входящие</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
