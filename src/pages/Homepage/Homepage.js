import { Link } from "react-router-dom";
import Slider from "react-slick";

import './Homepage.scss'
import Header from '../../components/Header/Header'
import homeImg from '../../assets/images/Learning-amico.png'
import slideImg from '../../assets/images/line-bottom-bg.png'
import IntroduceImg from '../../assets/images/Questions-rafiki.png'
import TextShadow from "../../components/TextShadow/TextShadow";
import BoxContent from "../../components/BoxContent/BoxContent";
import imgMath from "../../assets/images/math.png"
import imgQuyTrinh from "../../assets/images/leadership-cuate.png"
import imgQuyTrinh2 from "../../assets/images/blue-hat-star1.png"
import imgQuyTrinh3 from "../../assets/images/method-star-bg.png"
import ListStyle from "../../components/ListStyle/ListStyle";

const Homepage = () => {
    const settings = {
        dots: true, // Hiện dấu chấm
        infinite: true, // Cuộn vô hạn
        speed: 500, // Tốc độ chuyển slide
        slidesToShow: 1, // Số lượng slide hiển thị
        slidesToScroll: 1, // Số lượng slide cuộn mỗi lần
        autoplay: true, // Tự động chuyển slide
        autoplaySpeed: 3000, // Thời gian giữa các lần chuyển slide
      };
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
            <div className="slider-container">                
                <div className="slide-imgs">
                    <img src={slideImg} className="slide-img"/>
                </div>
                <div className="slide-items">
                    <div className="slide-item">
                        <TextShadow 
                            text={'Lý do chọn gia sư SeiSei'}
                            tColor={'#fff'}
                            fontSize={'40px'}
                            fontWeight={'bold'}
                            sColor={'#FF99BA'}
                        />
                        <ul className="slide-content">
                            <li className="content-item">
                                Mức học phí phù hợp
                            </li>
                            <li className="content-item">
                                Gia sư được tuyển chọn, xác minh
                            </li>
                            <li className="content-item">
                                Học viên được học thử
                            </li>
                            <li className="content-item">
                                Cam kết tư vấn - hỗ trợ 24/7
                            </li>
                        </ul>
                        <Link className="slide-btn" to={'/register'}>
                            Đăng ký tìm gia sư ngay
                        </Link>
                    </div>

                </div>
                
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
            {/* <div className="lha-items"> */}
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
            {/* </div> */}
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
        
    </div>
    )
}

export default Homepage