import style from './TestTable.module.scss';

const TestTable = ({ tests, onEdit }) => {
  return (
    <div className={style['table-container']}>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Bài kiểm tra</th>
            <th>Thời gian</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={test.id} className={style.row}>
              <td className={`${style['table-cell']} ${style['table-cell__0']}`}>{index + 1}</td>
              <td className={`${style['table-cell']} ${style['table-cell__1']}`}>{test.name}</td>
              <td className={`${style['table-cell']} ${style['table-cell__2']}`}>{test.time}</td>
              <td className={`${style['table-cell']}`}>
                {test.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onEdit} className={style['edit-button']}>
        Chỉnh sửa bài nộp
      </button>
    </div>
  );
};

export default TestTable;
