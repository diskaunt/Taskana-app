import React from 'react';
import style from './button.module.css';

const Button = ({newStyle, children, onClick}) => {
  return (
      <button onClick={onClick} className={`${style.button} ${newStyle || null}`}>
        {children || null}
      </button>
  );
};

export default Button;
