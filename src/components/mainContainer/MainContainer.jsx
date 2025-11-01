
import TaskList from '@/components/taskList/TaskList';
import style from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <main className={style.mainContainer}>
      <h2 className={style.mainContainer__title}>Входящие</h2>
      <TaskList />
    </main>
  );
};

export default MainContainer;
