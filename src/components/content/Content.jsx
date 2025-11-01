import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';
import style from './content.module.css';
import NavBar from '@/components/navBar/NavBar';
import SideBar from '@/components/sideBar/SideBar';
import ThemeContext from '@/context/ThemeContext';
import { useContext } from 'react';

const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${style.content} ${theme === 'dark' ? 'darkTheme' : ''}`}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  );
};

export default Content;
