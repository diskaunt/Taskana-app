import React from 'react';
import style from './button.module.css';

const Button = ({newStyle, children}) => {
  return (
    <div className={style.button}>
      <button className={`${style.button__element} ${newStyle || ''}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
