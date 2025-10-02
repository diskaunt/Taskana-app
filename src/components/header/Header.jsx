import React from 'react';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Button newStyle={style.header__button}>
        <img src='../../../public/create.svg' alt='' />
        <span>Создать</span>
      </Button>
    </header>
  );
};

export default Header;
