import React, { useContext, useEffect, useState } from "react";
import styles from "./Payment.module.scss";
import TopTabNavigation from "../../../components/TopTabNavigation/TopTabNavigation";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { DataContext } from "../../../Context/DataContext";

const Payment = () => {
  const TopTab = ["Chưa thanh toán", "Đã thanh toán"];
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const [paid, setPaid] = useState({title: '', content : {button: false, header: [], content: []}})
  const [unpaid, setUnPaid] = useState({title: '', content : {button: false, header: [], content: []}})

  const {payment} = useContext(DataContext)
  useEffect(() => {
    const paid = {
      title: 'Danh sách lớp học đã thanh toán học phí',
      content: {
        button: false,
        header: ["Mã lớp", "Đơn giá", "Thời gian", "Số buổi học", "Học phí", "Ngày thanh toán"],
        content: payment.filter((v) => v.status === 'Đã thanh toán').map((v) => ({
          content: [v.id, v.price, v.time, v.sessions, v.total, v.datePaid],
          color: v.color,
          backgroundColor: v.backgroundColor,
        }))
      }
    };
    const unpaid = {
      title: 'Danh sách lớp học đã thanh toán học phí',
      content: {
        button: true,
        header: ["Mã lớp", "Đơn giá", "Thời gian", "Số buổi học", "Học phí"],
        content: payment.filter((v) => v.status === 'Chưa thanh toán').map((v) => ({
          content: [v.id, v.price, v.time, v.sessions, v.total, v.datePaid],
          color: v.color,
          backgroundColor: v.backgroundColor,
          paymentId: v.paymentId
        }))
      }
    };
    setPaid(paid);
    setUnPaid(unpaid);
  }, [payment]); 
  const Table = ({ data }) => {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.tableTitle}>{data.title}</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              {data.content.header.map((v, i) => (
                <th className={styles.headerData} key={i}>
                  {v}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.content.content.map((row, rowIndex) => {
              return (
                <tr
                  className={styles.row}
                  key={rowIndex}
                  style={{
                    backgroundColor: row.backgroundColor,
                    color: row.color,
                  }}
                >
                  {row.content.map((value, colIndex) => (
                    <td className={styles.data} key={colIndex}>
                      {value}
                    </td>
                  ))}
                  {data.content.button && (
                    <td className={styles.buttonCell}>
                      <div className={styles.button} onClick={() => navigate(`../payment/gateway/${row.paymentId}`)}>
                        <Button title="Thanh toán" type="danger" />
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>THANH TOÁN</div>
      </div>
      <div className={styles.contentContainer}>
        <TopTabNavigation data={TopTab} onTabChange={setTab} activeTab={tab} />
        <Table data={tab === 0 ? unpaid : paid} />
      </div>
    </div>
  );
};

export default Payment;
