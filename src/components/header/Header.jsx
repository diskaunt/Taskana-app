import Button from '@/components/button/Button';
import style from './header.module.css';
import Logo from '@/components/logo/Logo';
import Icon from '@/components/icon/Icon';
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher';
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header
        className={`${style.header} ${theme === 'dark' ? 'darkTheme' : ''}`}
      >
        <Logo />
        <div className={style.header__actions}>
          <Button newStyle={style.header__button}>
            <div className={style.header__icon}>
              <Icon name={'Create'} />
            </div>
            <span>Создать</span>
          </Button>
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default Header;
