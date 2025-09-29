import React from 'react';
import IncomingTasks from '../../pages/incomingTasks/IncomingTasks';
import style from './content.module.css';
import NavBar from '../navBar/NavBar';
import SideBar from '../sideBar/SideBar';

const Content = () => {
  return (
    <div className={style.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  );
};

export default Content;
