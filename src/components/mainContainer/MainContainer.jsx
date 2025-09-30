import React from 'react';
import TaskList from '../taskList/TaskList';
import style from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={style.mainContainer}>
      <h2 className={style.mainContainer__title}>Заголовок</h2>
      <TaskList />
    </div>
  );
};

export default MainContainer;
