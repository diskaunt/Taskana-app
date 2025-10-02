import React from 'react';
import style from './logo.module.css';
const Logo = () => {
  return (
    <a href='/' className={style.logo}>
      <img src='../../../public/logo.svg' alt='Logo' />
    </a>
  );
};

export default Logo;
