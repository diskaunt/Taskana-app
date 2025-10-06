import React from 'react';
import style from './appLayouts.module.css';
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';
import ThemeContext from '../../components/themeContext/ThemeContext';

const AppLayouts = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <div
        className={`${style.appLayouts} ${
          theme === 'dark' ? 'darkTheme' : ''
        }`}
      >
        <Header />
        <Content />
      </div>
    </ThemeContext>
  );
};

export default AppLayouts;
