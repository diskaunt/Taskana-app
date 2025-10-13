
import style from './button.module.css';

const Button = ({newStyle, children, type, onClick}) => {
  return (
      <button type={type} onClick={onClick} className={`${style.button} ${newStyle || null}`}>
        {children || null}
      </button>
  );
};

export default Button;
