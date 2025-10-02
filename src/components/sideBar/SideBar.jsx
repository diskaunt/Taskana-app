import React from 'react';
import style from './sideBar.module.css';
import Statistic from '../statistic/Statistic';

const SideBar = () => {
  return (
    <aside className={style.sidebar}>
      <Statistic />
    </aside>
  );
};

export default SideBar;
