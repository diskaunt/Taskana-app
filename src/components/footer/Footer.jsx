import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <h2 className={style.footer__title}>Footer</h2>
      <p className={style.footer__color}>
        Light
      </p>
      <p className={style.footer__text}>
        Проект выполнен в рамках стажировки{' '}
        <span className={style.footer__text_underline}>PREAX</span>
      </p>
    </div>
  );
};

export default Footer;
