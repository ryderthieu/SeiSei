import style from "./Overlay.module.scss";

const AcceptedOverlay = ({ data, type, yes, no }) => {

  return (
    <div className={style.container} style={{ color: data.color }} id="container">
      <div className={style.modal}>
        <div className={style.close}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
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
            style={{ backgroundColor: data.color }}
          >
            Xác nhận
          </div>
          {type === "confirm" && (
            <div
              className={[style.button, style.cancel].join(" ")}
              onClick={no}
            >
              Hủy
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptedOverlay;
