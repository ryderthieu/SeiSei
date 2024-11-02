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

const CourseCard = ({data}) => {

    return (
        <div className="card-container" style={{color: data.color}}>
            <div className="card-imgs">
                <img className = 'card-img' src={data.img}/>
            </div>
            <div className = 'card-text'>
                <div className="card-title" >
                    {data.title}
                </div>
                {data.content.map((v, i) => {
                    return (
                        <p className='card-content' key={i}>
                            {v}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export {BoxContent, CourseCard}