import React from 'react';
import Button from '../button/Button';
import style from './header.module.css';
import Logo from '../logo/Logo';
import Icon from '../icon/Icon';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.header__actions}>
        <Button newStyle={style.header__button}>
          <Icon name={'Create'} />
          <span>Создать</span>
        </Button>
        <ThemeSwitcher/>
      </div>
    </header>
  );
};

export default Header;
