import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import './Homepage.scss'
import Header from '../../components/Header/Header'
import homeImg from '../../assets/images/Learning-amico.png'
import slideImg from '../../assets/images/line-bottom-bg.png'
import IntroduceImg from '../../assets/images/Questions-rafiki.png'
import TextShadow from "../../components/TextShadow/TextShadow";
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
    </div>
    )
}

export default Homepage