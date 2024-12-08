import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './Homepage.scss'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import TextShadow from "../../components/TextShadow/TextShadow";
import homeImg from '../../assets/images/Learning-amico.png'
import slideImg from '../../assets/images/line-bottom-bg.png'
import IntroduceImg from '../../assets/images/Questions-rafiki.png'
import {BoxContent} from "../../components/Card/Card";
import imgMath from "../../assets/images/chemistry1.png"
import imgJapan from "../../assets/images/japanese.png"
import imgArt from "../../assets/images/art.png"
import imgQuyTrinh from "../../assets/images/leadership-cuate.png"
import imgQuyTrinh2 from "../../assets/images/blue-hat-star1.png"
import imgQuyTrinh3 from "../../assets/images/method-star-bg.png"
import ListStyle from "../../components/ListStyle/ListStyle";
import LYImg1 from "../../assets/images/frame-line.png"
import LYImg2 from "../../assets/images/orange-bulb.png"
import SquareContent from "../../components/SquareContent/SquareContent";
import Slider from "../../components/Slider/Slider";


const Homepage = () => {
        const animationRef = useRef([]);
        const sectionsRef = useRef([]);
        const [activeSection, setActiveSection] = useState('');
        useEffect(() => {
            const handleIntersection = (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                  }
                });
              };
            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5,  
            });
        
            sectionsRef.current.forEach((section) => {
                observer.observe(section);
            });
        
            return () => observer.disconnect();
        },[])
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate-visible");

                        } else {
                            entry.target.classList.remove("animate-visible");
                        }

                    });
                },
                { threshold: 0.5 }
            );
    
            animationRef.current.forEach((section) => {
                if (section) observer.observe(section);
            });
    
            return () => {
                animationRef.current.forEach((section) => {
                    if (section) observer.unobserve(section);
                });
            };
        }, []);
    
    return (
    <div className='homepage-container'>
        <Header activeSection={activeSection}/>
        <div id = 'TrangChu' className='section animate-fade-in'
                    ref={(el) => {animationRef.current.push(el)
                        sectionsRef.current.push(el)
                    }}>
            <div className="home-imgs">
                <img src={homeImg} className='home-img'/>
            </div>

            <div className="home-content">
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
        <div id="GioiThieu" className='section animate-fade-in'
                    ref={(el) => {animationRef.current.push(el);
                        sectionsRef.current.push(el)
                    }}>
            <div className="slide-container  animate-left"
                    ref={(el) => animationRef.current.push(el)}>
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
            <div className=" animate-right"
                    ref={(el) => animationRef.current.push(el)}>
                <img src={IntroduceImg} className="introduce-img"/>
            </div>
        </div>
        <div id='LopHoc' className='section' ref={(el) => sectionsRef.current.push(el)}>
            <div className='lh-title animate-fade-in'
                    ref={(el) => animationRef.current.push(el)}>
                <TextShadow 
                    text={'Các lớp học'}
                    tColor={'#fff'}
                    fontSize="50px"
                    fontWeight="900"
                    sColor={'#75C1F2'}
                />
            </div>
            <div className = 'lh-item animate-right'
                ref={(el) => animationRef.current.push(el)}>
                <BoxContent 
                    title={'LỚP HỌC PHỔ THÔNG'}
                    img={imgMath}
                    content={'Các lớp học phổ thông bao gồm tất cả các môn học từ lớp 1 đến lớp 12 ở trường. Các gia sư sẽ được đào tạo và đảm bảo chất lượng dạy đúng chuẩn theo sách giáo khoa.'}
                    backgroundColor={'#fff'}
                    color="#F4BE6A"
                />
            </div>
            <div className = 'lh-item animate-left'
                ref={(el) => animationRef.current.push(el)}>
                <BoxContent 
                    title={'LỚP HỌC NGOẠI NGỮ'}
                    img={imgJapan}
                    content={'Các lớp học ngoại ngữ bao gồm các lớp luyện thi IELTS, TOIEC, TOFEL, JLPT và  nhiều cuộc thi quốc tế khác. Các gia sư được tuyển chọn kỹ càng và có bằng cấp đủ để hướng dẫn học viên. Chúng tôi cam kết mang đến cho các bạn những kiến thức sát với đề thi nhất.'}
                    backgroundColor={'#fff'}
                    type='right'
                    color="#f1b2d1"
                />
            </div>
            <div className = 'lh-item animate-right'
                ref={(el) => animationRef.current.push(el)}>
                <BoxContent 
                    title={'LỚP HỌC NĂNG KHIẾU'}
                    img={imgArt}
                    content={'Lớp học năng khiếu bao gồm các môn như Vẽ, Piano và nhiều loại hình nghệ thuật khác. Với chi phí vừa phải, chúng tôi mang đến cho các bạn những gia sư chất lượng tốt để phát huy tài năng bên trong của mình.'}
                    backgroundColor={'#fff'}
                    color="#86bce2"
                />
            </div>
        </div>
        <div id='DangKyLop' className="section" ref={(el) => sectionsRef.current.push(el)}>
            <div className="dkl-imgs">
                <img src={imgQuyTrinh} className='dkl-img1 animate-fade-in'
                ref={(el) => animationRef.current.push(el)} alt=""/>
                <img src={imgQuyTrinh2} className='dkl-img2 animate-zoom-in'
                ref={(el) => animationRef.current.push(el)} alt=""/>
                <img src={imgQuyTrinh3} className='dkl-img3 animate-zoom-in'
                ref={(el) => animationRef.current.push(el)} alt=""/>
            </div>
            <div className="dkl-content-container">
                <div className='dkl-title animate-left'
                ref={(el) => animationRef.current.push(el)}>
                    <TextShadow 
                        text={'Quy trình'}
                        tColor={'#3E91C7'}
                        sColor={'#fff'}
                        fontWeight={900}
                    />
                </div>
                <div className='dkl-content animate-zoom-in'
                ref={(el) => animationRef.current.push(el)}>
                    <ListStyle 
                        stt={'01'}
                        content={'Đăng ký yêu cầu tìm gia sư'}
                        color={'#000'}
                    />
                    <ListStyle 
                        stt={'02'}
                        content={'Lựa chọn gia sư phù hợp dựa trên các đơn yêu cầu'}
                        color={'#83BBE1'}
                        direction="right"
                    />
                    <ListStyle 
                        stt={'03'}
                        content={'Tiến hành học thử trước khi ra quyết định'}
                        color={'#000'}
                    />
                    <ListStyle 
                        stt={'04'}
                        content={'Thống nhất lịch học chính thức với gia sư'}
                        color={'#83BBE1'}
                        direction="right"
                    />
                    <ListStyle 
                        stt={'05'}
                        content={'Trong quá trình học nếu có bất kì sự cố nào sẽ liên lạc với trung tâm để xử lý'}
                        color={'#000'}
                    />
                </div>
            </div>
        </div>
        <div id='LuuY' className="section" ref={(el) => sectionsRef.current.push(el)}>
            <div className='LY-imgs animate-fade-in'
                ref={(el) => animationRef.current.push(el)}>
                <img id="LY-img1" src={LYImg1} />
                <img id="LY-img2" src={LYImg2} />
            </div>
            <div className='LY-content-container animate-zoom-in'
                ref={(el) => animationRef.current.push(el)}>
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
        <div id='LienHe' ref={(el) => sectionsRef.current.push(el)}>
            <Footer/>
        </div>
    </div>
    )
}

export default Homepage