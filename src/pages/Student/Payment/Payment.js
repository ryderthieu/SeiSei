import React, { useState } from "react";
import styles from "./Payment.module.scss";
import TopTabNavigation from "../../../components/TopTabNavigation/TopTabNavigation";

const unpaid = {
  title: "Danh sách các lớp chưa thanh toán học phí",
  content: {
    button: true,
    header: ["Mã lớp", "Hình thức", "Thời gian", "Số buổi học", "Học phí"],
    content: [
      {
        content: ["ENG102", "Online", "11/2024", "8 buổi", "1.500.000 VND"],
        color: "rgba(237, 102, 158, 1)",
        backgroundColor: "rgba(237, 102, 158, 0.2)",
      },
      {
        content: ["MAH012", "Online", "11/2024", "7 buổi", "1.200.000 VND"],
        color: "rgba(255, 193, 7, 1)",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
      },
    ],
  },
};
const paid = {
  title: "Danh sách các lớp đã thanh toán học phí",
  content: {
    button: false,
    header: ["Mã lớp", "Hình thức", "Thời gian", "Số buổi học", "Học phí", "Ngày thanh toán"],
    content: [
      {
        content: ["ENG102", "Online", "10/2024", "8 buổi", "1.500.000 VND", "29/10/2024"],
        color: "rgba(237, 102, 158, 1)",
        backgroundColor: "rgba(237, 102, 158, 0.2)",
      },
      {
        content: ["MAH012", "Online", "10/2024", "8 buổi", "1.500.000 VND", "01/11/2024"],
        color: "rgba(255, 193, 7, 1)",
        backgroundColor: "rgba(255, 193, 7, 0.2)",
      },
    ],
  },
}
const Payment = () => {
  const TopTab = ["Chưa thanh toán", "Đã thanh toán"];
  const [tab, setTab] = useState(0);

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
                        <button className={styles.button}>Thanh toán</button>
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
