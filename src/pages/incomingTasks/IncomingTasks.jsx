
import style from './incomingTasks.module.css';
import MainContainer from '@/components/mainContainer/MainContainer';
import Footer from '@/components/footer/Footer';

const IncomingTasks = () => {
  return (
    <div className={style.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  );
};

export default IncomingTasks;
