import React from 'react';
import style from './button.module.css';

const Button = ({children}) => {
  return (
    <div className={style.button}>
      <button className={style.button__element}>
        <img src='../../../public/create.svg' alt='' />
        <span className={style.button__text}>{children}</span>
      </button>
    </div>
  );
};

export default Button;
