import styles from './themeSwitcher.module.css';
import Icon from '@/components/icon/Icon';
import Button from '@/components/button/Button';
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';


const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.themeSwitcher}>
      <Button
        type={'button'}
        onClick={toggleTheme}
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
