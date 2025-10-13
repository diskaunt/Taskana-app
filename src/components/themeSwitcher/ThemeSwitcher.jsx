import styles from './themeSwitcher.module.css';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import ThemeContext from '../../themeContext/ThemeContext';
import { useContext } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeSwitcher = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.themeSwitcher}>
      <Button
        type={'button'}
        onClick={themeSwitcher}
        newStyle={`${styles.themeSwitcher__content} ${
          theme === 'light'
            ? styles.themeSwitcher__content_ligth
            : styles.themeSwitcher__content_dark
        }`}
      >
        <div className={`${styles.themeSwitcher__iconWrapper}`}>
          <Icon name={'Sun'} />
        </div>
        <div className={`${styles.themeSwitcher__iconWrapper}`}>
          <Icon name={'Moon'} />
        </div>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
