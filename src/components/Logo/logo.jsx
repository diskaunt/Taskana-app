import React from 'react';
import style from './logo.module.css';
import Illustration from '../illustration/Illustration';

const Logo = () => {
  return (
    <a href='/' className={style.logo}>
      <Illustration name={'Logo'}/>
    </a>
  );
};

export default Logo;
