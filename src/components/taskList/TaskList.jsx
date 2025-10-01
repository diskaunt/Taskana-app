import React from 'react';
import style from './taskList.module.css';

const TaskList = () => {
  return (
    <div className={style.taskList}>
      <div className={style.taskList__text}>
        <h3 className={style.taskList__title}>
          Все твои задачи организованы как надо
        </h3>
        <p className={style.taskList__description}>
          Отличная работа! Ты&nbsp;большой молодец!
        </p>
      </div>
      <img
        className={style.taskList__image}
        src='../../../public/taskList.svg'
        alt=''
      />
    </div>
  );
};

export default TaskList;
