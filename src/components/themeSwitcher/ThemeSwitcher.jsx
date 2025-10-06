import React from 'react';
import styles from './themeSwitcher.module.css';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import ThemeContext from '../themeContext/ThemeContext';


const ThemeSwitcher = () => {
	const {theme, setTheme} = React.useContext(ThemeContext);

  const themeSwitcher = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.themeSwitcher}>
      <Button
        onClick={themeSwitcher}
        newStyle={`${styles.themeSwitcher__content}`}
      >
        <div
          className={`${styles.themeSwitcher__iconWrapper} ${
            theme === 'light'
              ? styles.themeSwitcher__iconWrapper_action
              : null
          }`}
        >
          <Icon name={'Sun'} />
        </div>
        <div
          className={`${styles.themeSwitcher__iconWrapper} ${
            theme === 'dark'
              ? styles.themeSwitcher__iconWrapper_action
              : null
          }`}
        >
          <Icon name={'Moon'} />
        </div>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
