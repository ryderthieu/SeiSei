import React, {useState} from 'react';
import styles from './NewRequest.module.scss';
import RequestStep from '../../../../components/RequestStep/RequestStep';
import {SelectInput} from '../../../../components/Input/Input';
const stepperData = ["Yêu cầu", "Lựa chọn", "Học thử", "Thống nhất"];

const FormSection = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
    </div>
  );
};

const NewRequest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>ĐĂNG YÊU CẦU MỚI</div>
      </div>
      <div className={styles.contentContainer}>
      <RequestStep data={stepperData} active={0} />
      <div className={styles.sectionContainer}>
        <FormSection title="I. THÔNG TIN HỌC VIÊN" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cc136116f439c812ce8359665a4ff1ba17b9c72a7051f6fc560b7d730feef3bb?placeholderIfAbsent=true&apiKey=b4b130ce746a40aca47900204dbc8e32">
          <div className={styles.studentInfo}>
            <div className={styles.ageGroup}>
              <label htmlFor="age" className={styles.label}>Độ tuổi</label>
              <input 
                type="text" 
                id="age" 
                className={styles.input} 
                placeholder="Nhập độ tuổi"
              />
            </div>
            <div className={styles.expectations}>
              <label htmlFor="expectations" className={styles.label}>
                Mong muốn của học viên với gia sư
              </label>
              <input
                type="text"
                id="expectations"
                className={styles.input}
                placeholder="Nhập mong muốn của học viên với gia sư"
                aria-label="Nhập mong muốn của học viên với gia sư"
              />
            </div>
          </div>
        </FormSection>
      </div>
      
      <div className={styles.sectionContainer}>
        <FormSection title="II. THỜI GIAN VÀ HỌC PHÍ">
          <div className={styles.timeAndFee}>
            <div className={styles.budget}>
              <label htmlFor="budget" className={styles.label}>
                Ngân sách của một buổi học
              </label>
              <div className={styles.budgetInput}>
                <input
                  type="text"
                  id="budget"
                  className={styles.input}
                  placeholder="Nhập ngân sách một buổi học"
                  aria-label="Nhập ngân sách một buổi học"
                />
                <div className={styles.currency}>VNĐ</div>
              </div>
            </div>
            
            <div className={styles.timeSelection}>
              <SelectInput label="Thời gian rảnh" placeholder="Chọn thời gian" options={["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"]}  multi={true}/>
            </div>
          </div>
        </FormSection>
      </div>
      
      <div className={styles.sectionContainer}>
        <FormSection title="III. THÔNG TIN MÔN HỌC">
          <div className={styles.courseInfo}>
            <div className={styles.selects}>
              <SelectInput label="Chọn môn học" placeholder="Chọn môn học" options={["Toán", "Lý", "Hóa"]}/>
              <SelectInput label="Chọn trình độ" placeholder="Chọn trình độ" />
            </div>
            
            <div className={styles.sessions}>
              <label htmlFor="sessions" className={styles.label}>Số buổi học</label>
              <div className={styles.sessionsInput}>
                <input
                  type="text"
                  id="sessions"
                  className={styles.input}
                  placeholder="Nhập số buổi học"
                  aria-label="Nhập số buổi học"
                />
                <div className={styles.unit}>buổi/tuần</div>
              </div>
            </div>

            <div className={styles.teachingMethod}>
              <div className={styles.label}>Hình thức</div>
              <div className={styles.options}>
                <label className={styles.option}>
                  <input type="radio" name="method" value="online" />
                  <span>Online</span>
                </label>
                <label className={styles.option}>
                  <input type="radio" name="method" value="offline" />
                  <span>Offline</span>
                </label>
              </div>
            </div>
          </div>
        </FormSection>
      </div>
      
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          Xác nhận
        </div>
        <div className={[styles.button, styles.cancel].join(' ')}>
          Hủy
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
