
import style from './statistic.module.css';
import Illustration from '@/components/illustration/Illustration';

const Statistic = () => {
  return (
    <>
      <div className={style.statistic__content}>
        <Illustration name={'NoteBook'} />
        <p className={style.statistic__text}>
          Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать
          статистику и&nbsp;самочувствие.
        </p>
      </div>
    </>
  );
};

export default Statistic;
