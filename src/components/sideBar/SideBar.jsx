import React from 'react';
import style from './sideBar.module.css';

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__content}>
        <img
          className={style.sidebar__image}
          src='../../../public/light.svg'
          alt=''
        />
        <p className={style.sidebar__text}>
          Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать
          статистику и&nbsp;самочувствие.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
