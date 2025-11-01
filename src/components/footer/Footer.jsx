import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.footer__text}>
        Проект выполнен в рамках стажировки{' '}
        <a
          className={style.footer__text_underline}
          href='https://preax.ru/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>PREAX</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
