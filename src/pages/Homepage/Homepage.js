import { Link } from "react-router-dom";

import './Homepage.scss'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import TextShadow from "../../components/TextShadow/TextShadow";
import homeImg from '../../assets/images/Learning-amico.png'
import slideImg from '../../assets/images/line-bottom-bg.png'
import IntroduceImg from '../../assets/images/Questions-rafiki.png'
import {BoxContent} from "../../components/BoxContent/BoxContent";
import imgMath from "../../assets/images/math.png"
import imgQuyTrinh from "../../assets/images/leadership-cuate.png"
import imgQuyTrinh2 from "../../assets/images/blue-hat-star1.png"
import imgQuyTrinh3 from "../../assets/images/method-star-bg.png"
import ListStyle from "../../components/ListStyle/ListStyle";
import LYImg1 from "../../assets/images/frame-line.png"
import LYImg2 from "../../assets/images/orange-bulb.png"
import SquareContent from "../../components/SquareContent/SquareContent";
import Slider from "../../components/Slider/Slider";


const Homepage = () => {
    return (
    <div className='homepage-container'>
        <Header />
        <div id = 'TrangChu' className='section'>
            <div className='home-imgs'>
                <img src={homeImg} className='home-img'/>
            </div>

            <div className='home-content'>
                <h1 className = 'home-title'>
                    TRUNG TÂM GIA SƯ
                </h1>
                <h2 className = 'home-slogan'>
                    UY TÍN - TẬN TÂM - CHUYÊN NGHIỆP
                </h2>
                <div className='home-content__content'>
                    Sứ mệnh của chúng tôi là mang đến tri thức toàn diện cho học viên. 
                    Bởi vì chúng tôi tin rằng tri thức là ngọn đèn soi sáng con đường 
                    dẫn đến thành công.
                </div>
                <div className='home-content__btn-container'>
                    <a className='home-content__btn btn--disable'>
                        Học viên
                    </a>
                    <a href='' className='home-content__btn btn--active'>
                        Gia sư
                    </a>
                </div>
            </div>
        </div>
        <div id="GioiThieu" className="section">
            <div className="slide-container">
                <div className="slide-imgs">
                    <img src={slideImg} className="slide-img"/>
                </div>
                <div className="slide-content">
                    <Slider />
                </div>
                <Link className="slide-btn" to={'/register'}>
                    Đăng ký tìm gia sư ngay
                </Link>
            </div>
            <div>
                <img src={IntroduceImg} className="introduce-img"/>
            </div>
        </div>
        <div id='LopHoc' className="section">
            <div className="lh-title">
                <TextShadow 
                    text={'Các lớp học'}
                    tColor={'#fff'}
                    sColor={'#75C1F2'}
                />
            </div>
                <BoxContent 
                    className = 'lh-item'
                    title={'LỚP HỌC PHỔ THÔNG'}
                    img={imgMath}
                    content={'Không tự ý chuyển nhượng lớp cho người khác, tăng học phí, số buổi dạy, không gộp số buổi dạy nếu chưa có sự đồng ý của Trung tâm. Gia sư cần nghiên cứu kỹ đường đi trước khi nhận lớp, không giải quyết các trường hợp nhận lớp rồi không dạy do đường xa.'}
                    backgroundColor={'#F8FBFF'}
                />
                <BoxContent 
                    title={'LỚP HỌC PHỔ THÔNG'}
                    img={imgMath}
                    content={'Không tự ý chuyển nhượng lớp cho người khác, tăng học phí, số buổi dạy, không gộp số buổi dạy nếu chưa có sự đồng ý của Trung tâm. Gia sư cần nghiên cứu kỹ đường đi trước khi nhận lớp, không giải quyết các trường hợp nhận lớp rồi không dạy do đường xa.'}
                    backgroundColor={'#E5F4FF'}
                />
                <BoxContent 
                    title={'LỚP HỌC PHỔ THÔNG'}
                    img={imgMath}
                    content={'Không tự ý chuyển nhượng lớp cho người khác, tăng học phí, số buổi dạy, không gộp số buổi dạy nếu chưa có sự đồng ý của Trung tâm. Gia sư cần nghiên cứu kỹ đường đi trước khi nhận lớp, không giải quyết các trường hợp nhận lớp rồi không dạy do đường xa.'}
                    backgroundColor={'#E8F0FA'}
                />
        </div>
        <div id='DangKyLop' className="section">
            <div className="dkl-imgs">
                <img src={imgQuyTrinh} className="dkl-img1"/>
                <img src={imgQuyTrinh2} className="dkl-img2"/>
                <img src={imgQuyTrinh3} className="dkl-img3"/>
            </div>
            <div className="dkl-content-container">
                <div className="dkl-title">
                    <TextShadow 
                        text={'Quy trình'}
                        tColor={'#3E91C7'}
                        sColor={'#fff'}
                        fontWeight={900}
                    />
                </div>
                <div className="dkl-content">
                    <ListStyle 
                        stt={'01'}
                        content={'Tìm kiếm lớp phù hợp, đăng ký lớp'}
                        color={'#000'}
                    />
                    <ListStyle 
                        stt={'02'}
                        content={'Tìm kiếm lớp phù hợp, đăng ký lớp'}
                        color={'#83BBE1'}
                        direction="right"
                    />
                    <ListStyle 
                        stt={'03'}
                        content={'Tìm kiếm lớp phù hợp, đăng ký lớp'}
                        color={'#000'}
                    />
                    <ListStyle 
                        stt={'04'}
                        content={'Tìm kiếm lớp phù hợp, đăng ký lớp'}
                        color={'#83BBE1'}
                        direction="right"
                    />
                    <ListStyle 
                        stt={'05'}
                        content={'Tìm kiếm lớp phù hợp, đăng ký lớp Tìm kiếm lớp phù hợp, đăng ký lớp'}
                        color={'#000'}
                    />
                </div>
            </div>
        </div>
        <div id='LuuY' className="section">
            <div className="LY-imgs">
                <img id="LY-img1" src={LYImg1} />
                <img id="LY-img2" src={LYImg2} />
            </div>
            <div className="LY-content-container">
                <div className = 'LY-content-title'>
                    <TextShadow 
                        text={'Lưu ý'}
                        tColor={'#fff'}
                        sColor={'#FF8DBD'}
                        fontWeight="900"
                    />
                </div>
                <div className="LY-content">
                    <SquareContent 
                        content={'Trong quá trình giảng dạy, nếu có điều chưa hài lòng, phụ huynh cần báo với trung tâm ngay lập tức để đề ra phương án giải quyết ổn thỏa và điều chỉnh, thay đổi gia sư nếu cần thiết.'}
                        width={'300px'}
                        tColor={'#0A5192'}
                        cBg={'#E3F0F9'}
                        title={'Khi gặp vấn đề'}
                        tBg={'#BBD9F1'}
                        cColor={'black'}
                    />
                    <SquareContent 
                        content={'Phụ huynh nên theo dõi buổi đầu để kiểm tra mức độ hài lòng của học sinh, cách giảng dạy, cách truyền đạt kiến thức của gia sư. Hỏi ý kiến của học sinh để đưa ra quyết định hợp tác.'}
                        width={'300px'}
                        tColor={'#fff'}
                        cBg={'#F9E7F0'}
                        title={'Theo sát buổi học đầu'}
                        tBg={'#EB9CC3'}
                        cColor={'black'}
                    />
                    <SquareContent 
                        content={'Trong quá trình giảng dạy, nếu có điều chưa hài lòng, phụ huynh cần báo với trung tâm ngay lập tức để đề ra phương án giải quyết ổn thỏa và điều chỉnh, thay đổi gia sư nếu cần thiết.'}
                        width={'300px'}
                        tColor={'#EF8100'}
                        cBg={'#FFF9E3'}
                        title={'Góp ý cho gia sư'}
                        tBg={'#FFD95C'}
                        cColor={'black'}
                    />
                </div>
            </div>
        </div>
        <div id='LienHe'>
            <Footer/>
        </div>
    </div>
    )
}

export default Homepage