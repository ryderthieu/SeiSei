import { Link } from 'react-router-dom';
import style from './Overlay.module.scss';

const AcceptedOverlay = ({ data, type, yes, no }) => {
  return (
    <div className={style.container} style={{color: data.color}}>
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
          <div className={style.button} onClick={yes} style={{backgroundColor: data.color}}>Xác nhận</div>
          {type === 'confirm' && (
            <div className={[style.button, style.cancel].join(' ')} onClick={no}>
              Hủy
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptedOverlay;
