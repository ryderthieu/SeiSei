import './BoxContent.scss'
import { Link } from 'react-router-dom'
const BoxContent = ({title, img, content, type, backgroundColor}) => {
    
    return (
        <div className="boxContent-container" style={{'--bColor': backgroundColor}}>
            <div className="boxContent-imgs">
                <img className = 'boxContent-img' src={img}/>
            </div>
            <div className = 'boxContent-content'>
                <div className="bcContent-title">
                    {title}
                </div>
                <div className="bcContent-content">
                    {content}
                </div>
                <Link className='boxContent-btn' to = '/register'>
                    Đăng ký ngay
                </Link>
            </div>
        </div>
    )
}

export default BoxContent