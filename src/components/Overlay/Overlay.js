import style from "./Overlay.module.scss";
import Button from "../Button/Button";
const AcceptedOverlay = ({ data, type, yes, no, buttonType, titleYes = 'Xác nhận', titleNo = 'Hủy' }) => {

  return (
    <div className={style.container} style={{ color: data.color }} id="container">
      <div className={style.modal}>
        <div className={style.title}>{data.title}</div>
        {data.img && (
          <div className={style.icon}>
            <img src={data.img} alt="icon" />
          </div>
        )}
        <div className={style.contentContainer}>
          {data.content?.map((v, i) => (
            <div className={style.content} key={i}>
              <b>{v.label ? `${v.label}:` : ''}</b> {v.value}
            </div>
          ))}
        </div>
        <div className={style.buttonContainer}>
          <div
            className={style.button}
            onClick={yes}
          >
            <Button title = {titleYes} type={buttonType}/>
          </div>
          {type === "confirm" && (
            <div
              className={style.button}
              onClick={no}
            >
              <Button title = {titleNo} type='secondary' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptedOverlay;
