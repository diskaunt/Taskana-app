import { useState } from 'react';
import style from './appLayout.module.css';
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import ThemeContext from '../../themeContext/ThemeContext';

const AppLayouts = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <div
        className={`${style.appLayouts} ${theme === 'dark' ? 'darkTheme' : ''}`}
      >
          <Header />
          <Content />
      </div>
    </ThemeContext>
  );
};

export default AppLayouts;
