import React from 'react';
import style from './appLayouts.module.css';
import Header from '../../components/header/Header';
import Content from '../../components/content/Content';

const AppLayouts = () => {
  return (
    <div className={style.container}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayouts;
