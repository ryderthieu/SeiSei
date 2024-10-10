import './Homepage.scss'
import Header from '../../components/Header/Header'
import homeImg from '../../assets/images/Learning-amico.png'

const Homepage = () => {
    return (
    <div className='homepage-container'>
        <Header />
        <div id = 'home' className='home'>
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
    </div>
    )
}

export default Homepage