import { ExtendableCard } from '../../../../components/Card/Card';
import RequestStep from '../../../../components/RequestStep/RequestStep';
import style from './NewRequest.module.scss'
import img from '../../../../assets/images/art.png'
const stepperData = ['Yêu cầu', 'Lựa chọn', 'Học thử', 'Thống nhất'];
const requestData = [
    {
        img: img,
        title: [
            {
                label: 'Gia sư',
                value: 'Nguyễn Văn A'
            },
            {
                label: 'Giới tính',
                value: 'Nam'
            }
        ],
        content :
            {
                title: 'ĐỀ NGHỊ DẠY',
                content: [
                    {
                        label: 'Ngày sinh',
                        value: '21/11/2001'
                    },
                    {
                        label: 'Lịch rảnh',
                        value: ['Thứ Hai', 'Thứ Tư']
                    },
                    {
                        label: 'Bằng cấp',
                        value: ['Sinh viên - Ielts 7.0']
                    },
                    {
                        label: 'Thời gian có thể dạy thử',
                        value: ['Thứ Năm']
                    }
                ]
            },
        button: {
            title: 'Chấp nhận'
        }
    }
]
const NewRequest = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    ĐƠN YÊU CẦU TÌM GIA SƯ
                </div>
            </div>
            <div className={style.content}>
                <RequestStep data={stepperData} active={0}/>
                <ExtendableCard data={requestData[0]}/>
            </div>
        </div>
    )
}

export default NewRequest;