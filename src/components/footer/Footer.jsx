import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.footer__text}>
        Проект выполнен в рамках стажировки{' '}
        <span className={style.footer__text_underline}>PREAX</span>
      </p>
    </footer>
  );
};

export default Footer;
