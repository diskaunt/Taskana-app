
import style from './sideBar.module.css';
import Statistic from '@/components/statistic/Statistic';

const SideBar = () => {
  return (
    <aside className={style.sidebar}>
      <Statistic />
    </aside>
  );
};

export default SideBar;
