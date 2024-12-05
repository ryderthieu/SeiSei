import React from "react";
import styles from "./TestSubmission.module.scss"; // Đảm bảo rằng bạn đã tạo một file SCSS tương ứng

const TestSubmission = ({ tests, handleConfirm }) => {
  return (
    <div className={styles.testSubmission}>
      <label className={styles.title}>Chọn bài kiểm tra</label>
      <select className={styles.select}>
        <option value="">Chọn bài kiểm tra</option>
        {tests.map((test) => (
          <option key={test.id} value={test.id}>
            {test.name}
          </option>
        ))}
      </select>

      <label className={styles.title}>Bài làm</label>
      <div className={styles.testFile}>
        <ion-icon name="cloud-upload-outline"></ion-icon>
        <label>Thêm bài nộp</label>
        <input type="file" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.cancelButton}>Hủy</button>
        <button
          className={styles.confirmButton}
          onClick={handleConfirm}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default TestSubmission;
