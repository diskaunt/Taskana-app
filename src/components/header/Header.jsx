import React from 'react';
import Button from '../button/Button';
import Logo from '../logo/logo';
import style from './header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <Button>Создать</Button>
    </div>
  );
};

export default Header;
