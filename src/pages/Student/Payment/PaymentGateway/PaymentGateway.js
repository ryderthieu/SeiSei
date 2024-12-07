import { useEffect, useState } from "react";
import styles from "./PaymentGateway.module.scss";
import atm_qr from "../../../../assets/icon/atm_qr.png";
import momo_qr from "../../../../assets/icon/momo_qr.png";
import AcceptedOverlay from "../../../../components/Overlay/Overlay";
import success from "../../../../assets/icon/transaction_success.gif";
import { useNavigate } from "react-router-dom";

const billData = [
  {
    label: "Mã giao dịch",
    value: "TTSJFKCM7S56SDK",
  },
  {
    label: "Nội dung",
    value: "Thanh toán học phí tháng 10/2024",
  },
  {
    label: "Mã lớp",
    value: "ENG012",
  },
  {
    label: "Người giao dịch",
    value: "Nguyễn Văn A",
  },
  {
    label: "Người nhận",
    value: "Huỳnh Văn Thiệu",
  },
  {
    label: "Số tiền",
    value: "1.500.000",
  },
  {
    label: "Ngày giao dịch",
    value: "31/10/2024",
  },
];
const overlayData = {
  title: "GIAO DỊCH THÀNH CÔNG",
  img: success,
  color: "#1E9600",
};
const AtmIcon = ({ color }) => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4819_12410)">
        <path
          d="M10.3977 10.354C10.2414 10.354 10.0915 10.4161 9.98097 10.5266C9.87045 10.6371 9.80837 10.787 9.80837 10.9433C9.80837 11.0996 9.87045 11.2494 9.98097 11.36C10.0915 11.4705 10.2414 11.5326 10.3977 11.5326H11.9612V15.2804C11.9612 15.4367 12.0233 15.5866 12.1338 15.6971C12.2443 15.8076 12.3942 15.8697 12.5505 15.8697C12.7068 15.8697 12.8567 15.8076 12.9672 15.6971C13.0777 15.5866 13.1398 15.4367 13.1398 15.2804V11.5326H14.6955C14.8518 11.5326 15.0017 11.4705 15.1122 11.36C15.2227 11.2494 15.2848 11.0996 15.2848 10.9433C15.2848 10.787 15.2227 10.6371 15.1122 10.5266C15.0017 10.4161 14.8518 10.354 14.6955 10.354H10.3977ZM21.8746 10.4758C21.9461 10.5309 22.0041 10.6017 22.044 10.6828C22.0839 10.7638 22.1047 10.8529 22.1048 10.9433V15.2804C22.1048 15.4367 22.0427 15.5866 21.9322 15.6971C21.8217 15.8076 21.6718 15.8697 21.5155 15.8697C21.3592 15.8697 21.2093 15.8076 21.0988 15.6971C20.9883 15.5866 20.9262 15.4367 20.9262 15.2804V12.3654L19.6141 13.6776C19.559 13.7328 19.4935 13.7766 19.4213 13.8063C19.3491 13.8359 19.2718 13.8509 19.1937 13.8504C19.1156 13.8511 19.0381 13.8361 18.9657 13.8064C18.8934 13.7767 18.8278 13.7329 18.7726 13.6776L17.4691 12.3693V15.2804C17.4691 15.4367 17.407 15.5866 17.2965 15.6971C17.186 15.8076 17.0361 15.8697 16.8798 15.8697C16.7235 15.8697 16.5736 15.8076 16.4631 15.6971C16.3526 15.5866 16.2905 15.4367 16.2905 15.2804V10.9433C16.2908 10.8268 16.3255 10.713 16.3902 10.6161C16.4549 10.5192 16.5468 10.4436 16.6543 10.3988C16.7621 10.3538 16.8808 10.342 16.9954 10.365C17.1099 10.3879 17.2149 10.4446 17.297 10.5276L19.1945 12.4306L21.0991 10.5268C21.2071 10.4184 21.3531 10.3564 21.5061 10.354H21.5155C21.6454 10.3537 21.7717 10.3966 21.8746 10.4758ZM7.87394 10.8482C7.70108 10.4828 7.3318 10.3988 7.12515 10.3988C6.9193 10.3988 6.54923 10.4828 6.37637 10.8482L4.45608 15.0345C4.42379 15.1049 4.40567 15.1809 4.40276 15.2583C4.39985 15.3356 4.41221 15.4128 4.43913 15.4854C4.46606 15.558 4.50701 15.6246 4.55967 15.6814C4.61232 15.7381 4.67564 15.784 4.74601 15.8163C4.81638 15.8486 4.89242 15.8667 4.9698 15.8696C5.04717 15.8725 5.12436 15.8601 5.19695 15.8332C5.26955 15.8063 5.33613 15.7653 5.39289 15.7127C5.44966 15.66 5.4955 15.5967 5.5278 15.5263L5.84601 14.8326H8.4043L8.72251 15.5263C8.78774 15.6685 8.90674 15.7788 9.05336 15.8332C9.19997 15.8876 9.36218 15.8815 9.5043 15.8163C9.64641 15.751 9.7568 15.632 9.81117 15.4854C9.86555 15.3388 9.85945 15.1766 9.79423 15.0345L7.87708 10.8545L7.87394 10.8482ZM7.86373 13.654H6.38658L7.12515 12.0433L7.86373 13.654Z"
          fill={color}
        />
        <path
          d="M5.49498 1.51367C4.97907 1.51367 4.46821 1.61529 3.99158 1.81272C3.51494 2.01015 3.08186 2.29952 2.71706 2.66432C1.98031 3.40107 1.56641 4.40032 1.56641 5.44224V21.1565C1.56641 22.1985 1.98031 23.1977 2.71706 23.9344C3.08186 24.2993 3.51494 24.5886 3.99158 24.7861C4.46821 24.9835 4.97907 25.0851 5.49498 25.0851H21.2093C22.2512 25.0851 23.2504 24.6712 23.9872 23.9344C24.7239 23.1977 25.1378 22.1985 25.1378 21.1565V5.44224C25.1378 4.92634 25.0362 4.41548 24.8388 3.93884C24.6414 3.46221 24.352 3.02913 23.9872 2.66432C23.6224 2.29952 23.1893 2.01015 22.7127 1.81272C22.236 1.61529 21.7252 1.51367 21.2093 1.51367H5.49498ZM3.13783 5.44224C3.13783 4.81709 3.38618 4.21754 3.82823 3.77549C4.27028 3.33344 4.86982 3.0851 5.49498 3.0851H21.2093C21.8344 3.0851 22.434 3.33344 22.876 3.77549C23.3181 4.21754 23.5664 4.81709 23.5664 5.44224V21.1565C23.5664 21.7817 23.3181 22.3812 22.876 22.8233C22.434 23.2653 21.8344 23.5137 21.2093 23.5137H5.49498C4.86982 23.5137 4.27028 23.2653 3.82823 22.8233C3.38618 22.3812 3.13783 21.7817 3.13783 21.1565V5.44224Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4819_12410">
          <rect
            width="25.1429"
            height="25.1429"
            fill="white"
            transform="translate(0.78125 0.728516)"
          />
        </clipPath>
      </defs>
    </svg>
  );
const MomoIcon = ({ color }) => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3291 11.9159C20.6229 11.9159 22.4824 10.0565 22.4824 7.76266C22.4824 5.46886 20.6229 3.60938 18.3291 3.60938C16.0353 3.60938 14.1758 5.46886 14.1758 7.76266C14.1758 10.0565 16.0353 11.9159 18.3291 11.9159Z"
        stroke={color}
        stroke-width="1.30952"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.09961 11.9163V5.68771C3.09961 4.64795 4.06918 3.61133 5.17651 3.61133C6.28647 3.61133 7.25342 4.64742 7.25342 5.68771V11.9163"
        stroke={color}
        stroke-width="1.30952"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.25289 5.68771C7.25289 4.64795 8.22194 3.61133 9.32928 3.61133C10.4392 3.61133 11.4062 4.64742 11.4062 5.68771V11.9163M3.09961 22.9918V16.7626C3.09961 15.7229 4.06866 14.6857 5.17599 14.6857C6.28594 14.6857 7.25289 15.7223 7.25289 16.7626M7.25289 16.7626V22.9918M7.25289 16.7626C7.25289 15.7229 8.22194 14.6857 9.32928 14.6857C10.4392 14.6857 11.4062 15.7223 11.4062 16.7626V22.9918"
        stroke={color}
        stroke-width="1.30952"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3291 22.9921C20.6229 22.9921 22.4824 21.1326 22.4824 18.8388C22.4824 16.545 20.6229 14.6855 18.3291 14.6855C16.0353 14.6855 14.1758 16.545 14.1758 18.8388C14.1758 21.1326 16.0353 22.9921 18.3291 22.9921Z"
        stroke={color}
        stroke-width="1.30952"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
const PaymentGateway = () => {
  const [gate, setGate] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate()
  const [overlay, setOverlay] = useState(false)
  useEffect(() => {
    setTimeLeft(300);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gate]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>CỔNG THANH TOÁN TRỰC TUYẾN</div>
      </div>
      <div className={styles.content}>
        <div className={styles.paymentContainer}>
          <div className={styles.gateContainer}>
            <div
              className={[styles.gate, gate === 0 && styles.gateActive].join(
                " "
              )}
              onClick={() => setGate(0)}
            >
              <div className={styles.icon}>
                <ion-icon name="card-outline"></ion-icon>
              </div>
              <div className={styles.gateTitle}>Card</div>
            </div>
            <div
              className={[styles.gate, gate === 1 && styles.gateActive].join(
                " "
              )}
              onClick={() => setGate(1)}
            >
              <AtmIcon color={gate === 1 ? "#0570DE" : "#E0E0E0"} />
              <div className={styles.gateTitle}>ATM Banking</div>
            </div>
            <div
              className={[styles.gate, gate === 2 && styles.gateActive].join(
                " "
              )}
              onClick={() => setGate(2)}
            >
              <MomoIcon color={gate === 2 ? "#0570DE" : "#E0E0E0"} />
              <div className={styles.gateTitle}>Momo</div>
            </div>
          </div>

          <div className={styles.paymentContent}>
            {gate === 0 && (
              <>
                <div className={styles.row}>
                  <div className={styles.itemContainer}>
                    <label className={styles.label} for="id">
                      Số thẻ
                    </label>
                    <input
                      className={styles.input}
                      id="id"
                      placeholder="1234 1234 1234"
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.itemContainer}>
                    <label className={styles.label} for="name">
                      Tên chủ thẻ
                    </label>
                    <input
                      className={styles.input}
                      id="name"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.itemContainer}>
                    <label className={styles.label} for="outdate">
                      Ngày hết hạn
                    </label>
                    <input
                      className={styles.input}
                      id="outdate"
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className={styles.itemContainer}>
                    <label className={styles.label} for="cvc">
                      CVC
                    </label>
                    <input
                      className={styles.input}
                      id="cvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={[styles.button, styles.cancel].join(" ")} onClick={() => navigate('../payment')}>
                    Hủy
                  </div>
                  <div className={styles.button} onClick={() => setOverlay(true)}>Xác nhận</div>
                </div>
              </>
            )}
            {gate !== 0 && (
              <>
                <div className={styles.description}>
                  Quét mã QR để thanh toán
                </div>
                <div className={styles.qrContainer}>
                  <img src={gate === 1 ? atm_qr : momo_qr} className="qr" />
                  <div>
                    Mã sẽ hết hạn sau <b>{timeLeft}</b> giây
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.billInfo}>
          <div className={styles.title}>THÔNG TIN GIAO DỊCH</div>
          <div className={styles.content}>
            {billData.map((v, i) => (
              <div className={styles.line}>
                <b>{v.label}</b>: {v.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {overlay && <AcceptedOverlay data={overlayData} yes={() => navigate('../payment')} buttonType='success'/>}
    </div>
  );
};

export default PaymentGateway;
