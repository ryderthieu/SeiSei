import { Link } from 'react-router-dom';
import style from './Overlay.module.scss';

const AcceptedOverlay = ({ data, type, yes, no }) => {
  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div className={style.title}>
          {data.title}
        </div>
        <div className={style.icon}>
          <img src={data.img} alt="icon" />
        </div>
        <div className={style.content}>
          {data.content}
        </div>
        <div className={style.buttonContainer}>
          <Link className={style.button} to={yes}>Xác nhận</Link>
          {type === 'confirm' && (
            <Link className={[style.button, style.cancer].join(' ')} to={no}>
              Hủy
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptedOverlay;
