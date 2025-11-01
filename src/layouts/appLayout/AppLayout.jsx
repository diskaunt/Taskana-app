import style from './appLayout.module.css';
import Header from '@/components/header/Header';
import Content from '@/components/content/Content';
import ThemeProvider from '@/context/ThemeProvider';
const AppLayouts = () => {
  return (
    <ThemeProvider>
      <div className={`${style.appLayouts}`}>
        <h1 className={style.appLayouts__title}>Taskana</h1>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default AppLayouts;
